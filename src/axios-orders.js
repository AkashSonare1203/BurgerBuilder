import axios from "axios";
const instance = axios.create({
  baseURL: "https://react-my-burger-bbf29-default-rtdb.firebaseio.com/",
});
export default instance;
