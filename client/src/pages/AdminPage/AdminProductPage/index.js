import { useEffect, useState } from "react";
import s from "./index.module.css";
import FormSelect from "../FormSelect";
import { data } from "../../../data";
import { getIds } from "../../../helper";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../../../redux/API";

function AdminProductPage() {
  const [product, setProduct] = useState(null);
  const [descRu, setDescRu] = useState(null);
  const [nameRu, setNameRu] = useState(null);

  const [descEn, setDescEn] = useState(null);
  const [nameEn, setNameEn] = useState(null);

  const [descGe, setDescGe] = useState(null);
  const [nameGe, setNameGe] = useState(null);
  const [count, setCount]= useState(0)
  
  const [filter, setFilter] = useState("");
  const { products } = useSelector((state) => state.products);
  const [items, setItems]= useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(API.getProducts());
    setCount(9);
   
  }, []);
  
  useEffect(() => {
    let arr
    if(products.length>0 ){
       arr= [...products]
       if(arr.length>0){
    setItems(arr.reverse())
    }
    }
    
  }, [products]);

  const arrayCategory = getIds(data);
  const newArray = [
    ...arrayCategory,
    { title: "Select Product Category", id: "" },
  ];
  const handleClickLoadMore = () => {
    setCount((count) => count + 9);
  };



  const handleClickButton = async (e) => {
    if (descRu && nameRu && filter != "" && product && descEn && nameEn && descGe && nameGe ) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("product", product);

      formData.append("nameRu", nameRu);
      formData.append("descRu", descRu);

      formData.append("nameGe", nameGe);
      formData.append("descGe", descGe);

      formData.append("nameEn", nameEn);
      formData.append("descEn", descEn);

      formData.append("categoryId", filter);

      if (descRu && nameRu && filter != "" && product && descEn && nameEn && descGe && nameGe) {
        dispatch(API.createProduct(formData));
        dispatch(API.getProducts());
      }
      setDescEn('')
      setDescGe('')
      setDescRu('')
      setNameEn('')
      setNameGe('')
      setNameRu('')
      setProduct(null);
      setFilter(null)

    }
  };

  const onInputChange = (e) => {
    setProduct(e.target.files[0]);
  };

  const handleClick = async (id) => {
    dispatch(API.deleteProduct(id));
    dispatch(API.getProducts());
  };

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const configFilters = {
    defaultValue: filter,
    options: newArray,
    handleChange: handleChange,
  };

  return (
    <div>
      <div className={s.box}>
        <p className={s.header}> Add Product</p>
        <div className={s.select}>
          <FormSelect {...configFilters} />
        </div>
        <p className={s.error1}> *require</p>

        <form className={s.form}>
          <label>Image</label>
        
          <input
            type="file"
            accept="image/*"
            onChange={onInputChange}
            className={s.input}
          ></input>
          <p className={s.error}> *require</p>



          <textarea
            type="text"
            placeholder="Description in English"
            className={s.input}
            value={descEn}
            onChange={(e) => setDescEn(e.target.value)}
          />

          <p className={s.error}> *require</p>



          <textarea
            type="text"
            placeholder="Description in Russian"
            className={s.input}
            value={descRu}
            onChange={(e) => setDescRu(e.target.value)}
          />

          <p className={s.error}> *require</p>


          <textarea
            type="text"
            placeholder="Description in Georgian"
            className={s.input}
            value={descGe}
            onChange={(e) => setDescGe(e.target.value)}
          />

          <p className={s.error}> *require</p>



          <input
            type="text"
            placeholder="Title in English "
            className={s.input}
            value={nameEn}
            onChange={(e) => setNameEn(e.target.value)}
          />
          <p className={s.error}> *require</p>

          <input
            type="text"
            placeholder="Title in Russian"
            className={s.input}
            value={nameRu}
            onChange={(e) => setNameRu(e.target.value)}
          />
          <p className={s.error}> *require</p>


          <input
            type="text"
            placeholder="Title in Georgian"
            className={s.input}
            value={nameGe}
            onChange={(e) => setNameGe(e.target.value)}
          />
          <p className={s.error}> *require</p>




          <button onClick={handleClickButton} className={s.button}>
            Add
          </button>
        </form>
      </div>
      <p className={s.header1}> Product List </p>

      <div className={s.box1}>
        {items?.map((data, index) => {
      if (index <= count - 1) {
     
               return (
            <div className={s.boxItem}>
              <img
                className={s.image}
                src={require(`../../../images/${data?.image}`)}
              />
              <h2>Description In Georgian:</h2> 
              <p className={s.desc}> {data.translations[2].desc}</p>

   <h2>Description In Russian:</h2> 
              <p className={s.desc}> {data.translations[0].desc}</p>

   <h2>Description in English:</h2> 
              <p className={s.desc}> {data.translations[1].desc}</p>

              <div >
                {" "}
                <h2>Title In Georgian:</h2> 
                <p> {data.translations[2].name}</p>

     <h2>Title In Russian:</h2> 
                <p> {data.translations[0].name}</p>

     <h2>Title In English:</h2> 
                <p> {data.translations[1].name}</p>


                
              </div>


              <h2>Id:</h2>
              <p> {data?.categoryId}</p>
              <div
                className={s.addBrand}
                onClick={() => {
                  handleClick(data?._id);
                }}
              >
                {" "}
                Delete{" "}
              </div>
            </div>
          );}
        })}
      </div>
      <div className={s.box1}>
       {count < items?.length && (
          <button className={s.button1} onClick={handleClickLoadMore}>
          Load More
          </button>
        )}</div>
    </div>
  );
}
export default AdminProductPage;
