import axios from 'axios';

const geocode = async address => {
  const response = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=11970a39813a4e3abe710c8ce50abc34`
  );

  const { lat, lng } = await response.data.results[0]
    .geometry;

  return { lat, lng };
};

export default geocode;
