import axios from "axios";

// export default axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL,
//     headers: {
//         Accept: 'application/json',
//         "Content-Type": "application/json",
      
//     },
// });
export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
      
    },
});