import Axios from 'axios';
import { API } from '../config';
import AuthService from './Auth';

export default {
  async create(teacher) {
    const token = AuthService.token();
    return Axios.post(`${API}/teachers`, teacher, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
