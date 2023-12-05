import { useEffect, useState } from "react";
import s from "./index.module.css";
import { API } from "../../../redux/API";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../../../redux/Products/slice";
import { useNavigate } from "react-router-dom";

function BrandAdminPage() {
  const [image, setImage] = useState(null);
  const { brands } = useSelector((state) => state.brands);
  const dispatch = useDispatch();
  const navigate= useNavigate()

  useEffect(() => {
    dispatch(API.getBrands());
  }, []);

 

  const submitImage = async (e) => {
    e.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      dispatch(API.createBrand(formData));    
      

    }

    dispatch(API.getBrands());
  };

  const onInputChange = (e) => {
    
    setImage(e.target.files[0]);
  };

  const handleClick = async (id) => {
    dispatch(API.deleteBrand(id));
    dispatch(API.getBrands());
  };

  const handleClickLogOut =()=> {
 
    localStorage.clear()
    dispatch(logIn(false))
    navigate('/admin')
    
  }

  return (
    <div>
      <div className={s.box}>
      <p className={s.log} onClick={handleClickLogOut}>Log out</p>
        <p className={s.header}> Add Brand</p>
        <form onSubmit={submitImage}>
          <input type="file" accept="image/*" onChange={onInputChange}></input>
          <button type="submit">Add</button>
        </form>
      </div>

      <p className={s.header1}> Brands </p>
      <div className={s.box1}>
        {brands?.length>0 && brands?.map((data) => {
          return (
            <div key={data._id}>
              <img
                className={s.image}              
                // src={require(`../../../images/${data?.image}`)}
              />
              <div
                className={s.addBrand}
                onClick={() => {
                  handleClick(data._id);
                }}
              >
                {" "}
                Delete{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default BrandAdminPage;
