import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { cleanKeyWords } from "../components/BannerWithSearch";

import { database } from "../services/firebase";

type ReturnedArticlesType = {
  id: string;
  title: string;
  description: string;
};

type FirebaseArticles = {
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

type ParmsType = {
  keyWords: string;
};

export function useSearchPage() {
  const [returnedArticles, setReturnedArticles] = useState<
    ReturnedArticlesType[]
  >([]);

  const parms = useParams() as ParmsType;

  const keyWordsParms = cleanKeyWords(parms.keyWords);

  useEffect(() => {
    async function doQuery() {
      const articlesRef = database.collection("articles");

      await articlesRef
        .where("tags", "array-contains-any", keyWordsParms)
        .limit(20)
        .get()
        .then(querySnapshot => {
          console.log("USE_SEARCH_PAGE FEZ UMA QUERY");
          const result = querySnapshot.docs.map(doc => {
            const docId = doc.id;
            const allData = doc.data() as FirebaseArticles;
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
