const localCountry = localStorage.getItem("w-news-country");
const initialState = {
  newsHome: [],
  news: [],
  loading: true,
  error: null,
  country: localCountry ? localCountry : "us",
  page: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEWS_REQUESTED":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "NEWS_LOADED":
      return {
        ...state,
        news: action.payload,
        loading: false,
        error: null,
      };
    case "NEWS_ERROR":
      return {
        ...state,
        news: [],
        loading: false,
        error: action.payload,
      };
    case "NEWS_ADDED":
      return {
        ...state,
        news: [...state.news, ...action.payload],
        loading: false,
        error: null,
        page: action.page,
      };

    case "COUNTRY_CHANGED":
      localStorage.setItem("w-news-country", action.payload);
      return {
        ...state,
        country: action.payload,
        news: [],
        newsHome: [],
        loading: true,
        error: null,
      };

    case "NEWS_ITEM_CHOOSED":
      return {
        ...state,
        newsItem: action.payload,
      };

    case "NEWS_HOME_ADDED":
      return {
        ...state,
        newsHome: [...state.newsHome, action.payload],
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default reducer;
