
import  axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

export const instanceGet = () => axios.create({
    baseURL: url,
    headers: {"Content-Type": "application/json"}
});

// export default axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL,
//     // headers: {"Content-Type": "application/json"}
// });