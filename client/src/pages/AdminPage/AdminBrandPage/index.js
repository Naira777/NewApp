import { useEffect, useState } from "react";
import axios from "axios";
import s from './index.module.css'
import { API } from '../../../redux/API'
import { useSelector, useDispatch } from 'react-redux';



function BrandAdminPage() {

  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState(null);
  const {brands} = useSelector((state)=>state.brands)
  const dispatch = useDispatch()




  useEffect(() => {
    
     dispatch(API.getBrands())
    
  }, []);

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    // const result = await axios.post(
    //   "http://localhost:5000/upload-image",
    //   formData,
    //   {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   }
    // );
    dispatch(API.createBrand(formData))
   
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };


  const handleClick = async(id)=> {
    dispatch(API.deleteBrand(id))
    dispatch(API.getBrands())

  }

  return (
    <div>
  
        <div className={s.box}>
            <p className={s.header} > Add  Brand</p>   
         <form onSubmit={submitImage}>
        <input type="file" accept="image/*" onChange={onInputChange} ></input>
        <button type="submit">Add</button>
      </form>
          
</div>
  
   
     
<p className={s.header1} > Brands</p>   
      <div className={s.box1}>
      {brands?.map((data) => {

            return (
                <div >
              <img className={s.image}
                src={require(`../../../images/${data.image}`)}
            
              
              />
              <div className={s.addBrand} onClick={()=>{handleClick(data._id)}}> Delete  </div>
              </div>
          
            );
        
          } 
             
          
          )}
</div>


    


    </div>
  );
}
export default BrandAdminPage;