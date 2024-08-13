import axios from "axios";

const API_URL = "http://127.0.0.1:3004/users";

//Create the user
export const addUser = async (data) => {
  try {
    await axios.post(API_URL, data);
  } catch (error) {}
};

////// Without async await //////
// export const getPosts = () => {
//   return axios.get("https://jsonplaceholder.typicode.com/posts");
// };

//Fetch the users
export const getUsers = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {}
};

//Edit the users
export const editUsers = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {}
};

//Update the users
export const updateUsers = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {}
};

//Delete the users
export const deleteUsers = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {}
};
