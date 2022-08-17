import { useEffect, useState } from "react";
import { firebase, database } from "../services/firebase";
import { FirestoreArticle } from "../types/handleTypes";
import { scrollToTop } from "../utils/handleUtils";

export function useArticle(id: string) {
  const [article, setArticle] = useState<FirestoreArticle | undefined>(
    undefined
  );

  async function addViewToArticle(id: string) {
    const docRef = database.collection("articles").doc(id);

    await docRef.update({
      views: firebase.firestore.FieldValue.increment(1),
    });
  }

  useEffect(() => {
    const subscriber = () => {
      article && setArticle(undefined);

      async function retrieveArticle() {
        const docRef = database.collection("articles").doc(id);

        docRef.get().then((doc) => {
          console.log("USE_ARTICLE FEZ UMA QUERY");
          if (doc.exists) {
            const docData = doc.data();
            setArticle(docData as FirestoreArticle);
          }
        });
      }

      retrieveArticle();
      addViewToArticle(id);
      scrollToTop();
    };

    return subscriber();
  }, [id]);

  return { article };
}
