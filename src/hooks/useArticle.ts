import { useEffect, useState } from "react";
import { backToTop } from "../components/BackToTopButton";

import { firebase, database } from "../services/firebase";

type FirestoreArticle = {
  author: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  related: [{ id: string; title: string }];
  body: string;
  timestamp: { seconds: number; nanoseconds: number };
  views: number;
  rate: { useful: number; useless: number };
};

async function addViewToArticle(id: string) {
  const docRef = database.collection("articles").doc(id);

  await docRef.update({
    views: firebase.firestore.FieldValue.increment(1)
  });
}

export function useArticle(id: string) {
  const [article, setArticle] = useState<FirestoreArticle>();

  useEffect(() => {
    async function retrieveArticle() {
      const docRef = database.collection("articles").doc(id);

      await docRef.get().then(doc => {
        console.log("USE_ARTICLE FEZ UMA QUERY");
        if (doc.exists) {
          const docData = doc.data();
          let firestoreArticle = docData as FirestoreArticle;
          setArticle(firestoreArticle);
        }
      });
    }

    retrieveArticle();
    addViewToArticle(id);
    backToTop();
  }, [id]);

  return { article };
}
