const initialState = {
  articles: [],
  isFetching: false
};

const fetchArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_ARTICLES': {
      return {
        ...state,
        isFetching: true
      };
    }
    case 'RECEIVE_ARTICLES': {
      return {
        articles: action.payload.articles,
        isFetching: false
      };
    }
    default:
      return state;
  }
};

export default fetchArticlesReducer;
