const initialState = {
  sources: [],
  isFetching: false
};

const fetchSourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_SOURCES': {
      return {
        ...state,
        isFetching: true
      };
    }
    case 'RECEIVE_SOURCES': {
      return {
        sources: action.payload.sources,
        isFetching: false
      };
    }
    default:
      return state;
  }
};

export default fetchSourcesReducer;
