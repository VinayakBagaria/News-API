import axios from 'axios';

const ARTICLES_URL = 'https://newsapi.org/v1/articles?source=';
const API_KEY = '91a53883772d44bf8ee89d81249d4ac7';

const requestAPI = () => ({
  type: 'REQUEST_ARTICLES'
});

const receiveAPI = result => ({
  type: 'RECEIVE_ARTICLES',
  payload: result.data
});

const requestData = source =>
  function requester(dispatch) {
    dispatch(requestAPI());
    const ENDPOINT = `${ARTICLES_URL}${source}&apiKey=${API_KEY}`;
    console.log(ENDPOINT);
    axios(ENDPOINT).then(result => dispatch(receiveAPI(result)));
  };

export default requestData;
