import axios from 'axios';

const SOURCES_URL = 'https://newsapi.org/v1/sources';

const requestAPI = () => ({
  type: 'REQUEST_SOURCES'
});

const receiveAPI = result => ({
  type: 'RECEIVE_SOURCES',
  payload: result.data
});

const requestData = () =>
  function requester(dispatch) {
    dispatch(requestAPI());
    axios(SOURCES_URL).then(result => dispatch(receiveAPI(result)));
  };

export default requestData;
