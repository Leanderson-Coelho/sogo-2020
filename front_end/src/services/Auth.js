import Axios from 'axios';
import { API, TOKEN_KEY, USER_KEY } from '../config';
import { UserSession } from '../model/UserSession';

export default {
  async login(user) {
    const response = await Axios.post(`${API}/auth/login`, user);
    localStorage.setItem(TOKEN_KEY, response.data.accessToken);
    const userResponse = response.data.user;
    localStorage.setItem(
      USER_KEY,
      JSON.stringify(
        new UserSession(
          userResponse.name,
          userResponse.email,
          userResponse.type,
          userResponse.id
        )
      )
    );
  },

  isAuthenticated() {
    if (localStorage.getItem(TOKEN_KEY) !== null) {
      const userType = this.userSession().type;
      const location = window.location.pathname;
      if (userType === 'teacher') {
        if (location.search('participant') !== -1) {
          window.location.replace('/teacher');
          return true;
        }
        return true;
      }
      if (location.search('teacher') !== -1) {
        window.location.replace('/participant');
        return true;
      }
      return true;
    }
    return false;
  },

  userSession() {
    return JSON.parse(localStorage.getItem(USER_KEY));
  },

  token() {
    return localStorage.getItem(TOKEN_KEY);
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY, null);
    localStorage.removeItem(USER_KEY, null);
  },
};
