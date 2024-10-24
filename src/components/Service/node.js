import axios from "axios";

const NODE_URL = "http://localhost:8080/albums";

export const getNode = async () => {
  try {
    return await axios.get(NODE_URL);
  } catch (error) {}
};
