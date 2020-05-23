import Axios from 'axios';
import { API } from '../config';

export default {
  async login(user) {
    console.log(user);
    const response = await Axios.post(`${API}/auth/login`, user);
    console.log(response);
  },

  async users() {
    console.log(await Axios.get(`${API}/users`));
  },
};
