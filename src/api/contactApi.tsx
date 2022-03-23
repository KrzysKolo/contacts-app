import axios from 'axios';

export default axios.create({
  baseURL: "https://contact-app-86f60-default-rtdb.europe-west1.firebasedatabase.app"
})