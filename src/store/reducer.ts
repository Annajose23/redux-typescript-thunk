import { IArticle } from "../types";
import * as actionTypes from "./actionTypes";
import { ArticleState, ArticleAction } from "../types";

const initialState: ArticleState = {
  articles: [
    { id: 1, title: "post 1", body: "My first post" },
    { id: 2, title: "post 2", body: "my second post" },
    { id: 3, title: "post 3", body: "my third post" },
  ],
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle = {
        id: Math.random(),
        title: action.article.title,
        body: action.article.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter((article) => {
        article.id !== action.article.id;
      });
      return {
        ...state,
        articles: updatedArticles,
      };
  }

  return state;
};

export default reducer;