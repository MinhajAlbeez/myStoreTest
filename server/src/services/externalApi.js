const axios = require('axios');

const getProductFromExternalAPI = async (productId) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch product from external API');
  }
};

module.exports = {
  getProductFromExternalAPI
};
