import api from '../services/api';

const fetchApi = async userNameOrNickname => {
  try {
    async function loadUser() {
      const response = await api.get(userNameOrNickname);

      console.log(response);

      const { data } = await response;

      if (data && data.results) {
        return { data };
      }
    }

    const { data } = await loadUser();
  } catch (err) {
    console.log(err);
  } finally {
    return {
      data,
    };
  }
};

export default fetchApi;
