import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../services/firebase";
import { FirestoreArticle } from "../types/handleTypes";
import { treatKeyWords } from "../utils/handleUtils";

type ReturnedArticlesType = {
  id: string;
  title: string;
  description: string;
};

type Parms = {
  keyWords: string;
};

export function useSearch() {
  const [returnedArticles, setReturnedArticles] = useState<
    ReturnedArticlesType[] | undefined
  >(undefined);

  const parms = useParams() as Parms;

  const keyWordsParms = treatKeyWords(parms.keyWords);

  useEffect(() => {
    async function doQuery() {
      returnedArticles && setReturnedArticles(undefined);

      const articlesRef = database.collection("articles");

      await articlesRef
        .where("tags", "array-contains-any", keyWordsParms)
        .limit(20)
        .get()
        .then((querySnapshot) => {
          console.log("USE_SEARCH_PAGE FEZ UMA QUERY");
          const result = querySnapshot.docs.map((doc) => {
            const docId = doc.id;
            const allData = doc.data() as FirestoreArticle;
            const docTitle = allData.title;
            const docDescription = allData.description;

            return { id: docId, title: docTitle, description: docDescription };
          });

          setReturnedArticles(result);
        });
    }

    doQuery();
  }, [parms]);

  return { returnedArticles };
}
