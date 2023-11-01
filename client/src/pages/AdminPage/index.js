import { useEffect, useState } from "react";
import axios from "axios";
import s from './index.module.css'
import Navbar from "./Navbar";


function App() {
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getImage();
  }, []);

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    const result = await axios.post(
      "http://localhost:5000/upload-image",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
   
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const getImage = async () => {

    const result = await axios.get("http://localhost:5000/get-image")
    console.log(result);
    setAllImage(result?.data?.data);


  };

  return (
    <div>
  <p className={s.header}>Admin Page</p>

      <Navbar />

   
         


    </div>
  );
}
export default App;