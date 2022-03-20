import { useEffect, useState } from "react";

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

type PopularArticlesType = Array<{
  id: string;
  title: string;
}>;

async function addViewToArticle(id: string) {
  const docRef = database.collection("articles").doc(id);

  await docRef.update({
    views: firebase.firestore.FieldValue.increment(1)
  });
}

export function useArticle(id: string) {
  const [article, setArticle] = useState<FirestoreArticle>();

  const [popularArticles, setPopulartArticles] =
    useState<PopularArticlesType>();

  useEffect(() => {
    async function retrieveArticle() {
      const docRef = database.collection("articles").doc(id);

      await docRef.get().then(doc => {
        if (doc.exists) {
          const docData = doc.data();
          let firestoreArticle = docData as FirestoreArticle;
          setArticle(firestoreArticle);
        }
      });
    }

    retrieveArticle();
    addViewToArticle(id);
  }, [id]);

  return { article };
}
