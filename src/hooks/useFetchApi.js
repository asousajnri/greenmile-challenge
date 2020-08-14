import { useState, useCallback } from 'react';
import api from '../services/api';

const useFetchApi = userNameOrNickname => {
  const [isFetchinginging, setisFetchinginging] = useState(
    true
  );
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setisFetchinginging(true);
      const response = await api.get(userNameOrNickname);

      const { data } = await response.json();
      if (data && data.results) {
        setData(data.results);
      }
    } catch (err) {
      setError(err);
    } finally {
      setisFetchinginging(false);
    }
  }, [setisFetchinginging, userNameOrNickname, setError]);

  fetchData();

  return {
    isFetchinginging,
    data,
    error,
  };
};

export default useFetchApi;
