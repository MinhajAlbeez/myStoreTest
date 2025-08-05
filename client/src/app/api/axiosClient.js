import axios from "axios";

const axiosClient = {
  get: async (url) => {
    const response = await axios.get(url);
    return { data: response.data };
  },
  put: async (url, data) => {
    const response = await axios.put(url, data);
    return { data: response.data };
  }
};

export default axiosClient;
