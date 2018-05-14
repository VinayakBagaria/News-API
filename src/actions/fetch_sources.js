import axios from 'axios';

const SOURCES_URL = 'https://newsapi.org/v1/sources';
const API_KEY = '91a53883772d44bf8ee89d81249d4ac7';

const requestAPI = () => ({
  type: 'REQUEST_SOURCES'
});

const receiveAPI = result => ({
  type: 'RECEIVE_SOURCES',
  payload: result.data
});

const requestData = () =>
  function requester(dispatch) {
    console.log('in request');
    dispatch(requestAPI);
    return axios(SOURCES_URL).then(result => dispatch(receiveAPI(result)));
  };

export default requestData;
