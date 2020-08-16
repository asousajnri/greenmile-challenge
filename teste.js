const base64 = require('base-64');
const axios = require('axios');

const fetchApi = async () => {
  const url = 'http://api.github.com/user';
  const response = await axios.get(url, {
    headers: {
      Authorization: `Basic ${base64.encode(
        'asousajnri:joao832verdade'
      )}`,
    },
  });

  console.log(response);
};

fetchApi();
