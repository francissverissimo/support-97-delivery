import { useContext } from "react";
import { PopularArticlesContext } from "../contexts/PopularArticlesContext";

export function usePopularArticlesContext() {
  return useContext(PopularArticlesContext);
}
