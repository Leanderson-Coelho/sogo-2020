import Axios from 'axios';
import { API } from '../config';

export default {
  async create(participant) {
    return Axios.post(`${API}/participants`, participant);
  },
};
