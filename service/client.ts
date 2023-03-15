import axios from 'axios';
const client = axios.create({
  baseURL: 'https://open-book-backend-bf2v2naoe-ayazauthornate.vercel.app/',
});
export { client };
