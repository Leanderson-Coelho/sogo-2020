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

  async openCourses() {
    const token = AuthService.token();
    const response = await Axios.get(`${API}/courses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response;
    if (data) {
      const userSessionId = AuthService.userSession().id;
      const courses = data.map((c) => {
        if (c.subscribers) {
          if (c.subscribers.indexOf(userSessionId) !== -1) {
            return { ...c, registered: true };
          }
        }
        return { ...c, registered: false };
      });
      return courses;
    }
    return data;
  },

  subscrible(course) {
    const token = AuthService.token();
    return Axios.put(`${API}/courses/${course.id}`, course, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
