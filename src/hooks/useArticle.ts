import { useEffect, useState } from "react";

import { firebase, database } from "../services/firebase";

type FirestoreArticle = {
  author: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  related: string[];
  body: string;
  timestamp: { seconds: number; nanoseconds: number };
  views: number;
  rate: { useful: number; useless: number };
};

async function addViewToArticle(doc: string) {
  const docRef = database.collection("articles").doc(doc);

  await docRef.update({
    views: firebase.firestore.FieldValue.increment(1)
  });
}

export function useArticle(doc: string) {
  const [article, setArticle] = useState<FirestoreArticle>();

  useEffect(() => {
    const docRef = database.collection("articles").doc(doc);

    docRef.get().then(doc => {
      if (doc.exists) {
        const docData = doc.data();
        let firestoreArticle = docData as FirestoreArticle;
        setArticle(firestoreArticle);
      }
    });

    addViewToArticle(doc);
  }, [doc]);

  return article;
}
