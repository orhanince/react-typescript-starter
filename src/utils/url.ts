/**
 * Define base endpoint url.
 */
const BASE_URL: string = process.env.REACT_APP_STAGE == "local" ? "https://jsonplaceholder.typicode.com": "http://192.46.229.131";
export default  BASE_URL;