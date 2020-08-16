const base64 = require('base-64');
const axios = require('axios');

const fetchApi = async () => {
  const url =
    'https://api.github.com/user/starred/chakra-ui/chakra-ui';
  const response = await axios.put(url, {
    headers: {
      Authorization: `Basic ${base64.encode(
        'asousajnri:joao832verdade'
      )}`,
    },
  });

  console.log(response);
};

fetchApi();
