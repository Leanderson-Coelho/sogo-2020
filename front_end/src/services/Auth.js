import Axios from 'axios';
import { API, TOKEN_KEY, USER_KEY } from '../config';
import { UserSession } from '../model/UserSession';

export default {
  async login(user) {
    console.log(user);
    const response = await Axios.post(`${API}/auth/login`, user);
    console.log(response);
    localStorage.setItem(TOKEN_KEY, response.data.accessToken);
    const userResponse = response.data.user;
    localStorage.setItem(
      USER_KEY,
      JSON.stringify(
        new UserSession(
          userResponse.name,
          userResponse.email,
          userResponse.type
        )
      )
    );
  },

  isAuthenticated() {
    return localStorage.getItem(TOKEN_KEY) !== null;
  },

  userSession() {
    return JSON.parse(localStorage.getItem(USER_KEY));
  },
};
