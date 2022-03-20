import { createContext, ReactNode, useEffect, useState } from "react";
import { database } from "../services/firebase";

type ValueLocalStorageType = {
  popularArticles: PopularArticlesType;
  insertionDate: number;
};

type PopularArticlesContextType = {
  popularArticles: PopularArticlesType | undefined;
};

type PopularArticlesType = Array<{
  id: string;
  title: string;
}>;

type PopularArticlesContextProviderProps = {
  children: ReactNode;
};

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

export const PopularArticlesContext = createContext(
  {} as PopularArticlesContextType
);

export function PopularArticlesContextProvider(
  props: PopularArticlesContextProviderProps
) {
  const [popularArticles, setPopularArticles] = useState<PopularArticlesType>();

  async function checkLocalStorage() {
    if (localStorage.getItem("popularArticles")) {
      // console.log("TEM ALGO NO LocalStorage!");
      // recuperar dados do localStorage
      const localStorageData = JSON.parse(
        localStorage.getItem("popularArticles") as string
      ) as ValueLocalStorageType;

      const insertionDateLocalStorage = localStorageData.insertionDate;
      const currentDateNow = Date.now();
      
      // verificar se localStorage foi atualizado a menos de 1 dia
      if (currentDateNow - insertionDateLocalStorage < 86400000) { // 86400000ms === 1 dia
        // console.log("locaStorage ATUALIZADO A MENOS DE 1 DIA, NÃO BUSQUEI NO BANCO");
        setPopularArticles(localStorageData.popularArticles);
      } else {
        // console.log("locaStorage ATUALIZADO A MAIS DE 1 DIA, ENTÃO BUSQUEI NOVAMENTE NO BANCO");
        await retrieveMostViewedArticles();
      }
    } else {
      // console.log("NÃO TINHA NADA NO LocalStorage, ENTÃO BUSQUEI NO BANCO");
      await retrieveMostViewedArticles();
    }
  }

  async function retrieveMostViewedArticles() {
    const query = await database
      .collection("articles")
      .orderBy("views", "desc")
      .limit(5)
      .get();

    if (query.size > 0) {
      console.log("QUERY REALIZADA!");
      const arrayPopularArticles = query.docs;
      const result = arrayPopularArticles.map(doc => {
        const docId = doc.id;
        const docComplete = doc.data() as FirestoreArticle;
        const docTitle = docComplete.title;

        return { id: docId, title: docTitle };
      });

      const resultForLocalStorage = {
        popularArticles: result,
        insertionDate: Date.now()
      };

      localStorage.setItem(
        "popularArticles",
        JSON.stringify(resultForLocalStorage)
      );

      setPopularArticles(result);
    }
  }

  useEffect(() => {
    checkLocalStorage();
  }, []);
  return (
    <PopularArticlesContext.Provider value={{ popularArticles }}>
      {props.children}
    </PopularArticlesContext.Provider>
  );
}
