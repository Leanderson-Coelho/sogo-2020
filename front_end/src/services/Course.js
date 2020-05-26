import Axios from 'axios';
import { API } from '../config';
import AuthService from './Auth';

export default {
  create(course) {
    const token = AuthService.token();
    return Axios.post(`${API}/courses`, course, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
