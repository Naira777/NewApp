import { useEffect, useState } from "react";
import s from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../../../redux/API";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../../redux/Products/slice";

function NewsAdminPage() {
  const [newsImage, setNewsImage] = useState(null);
  const [articleru, setArticleRu] = useState(null);
  const [headerru, setHeaderRu] = useState(null);
  const [articleen, setArticleEn] = useState(null);
  const [headeren, setHeaderEn] = useState(null);
  const [articlege, setArticleGe] = useState(null);
  const [headerge, setHeaderGe] = useState(null);
  const { news } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const [newArr, setNewArr] = useState([]);
  const [count, setCount] = useState(0);
  const navigate= useNavigate()


  useEffect(() => {
    dispatch(API.getNews());
    setCount(6);
  }, []);

  useEffect(() => {
    let arr;
    if (news.length > 0) {
      arr = [...news];
      if (arr.length > 0) {
        setNewArr(arr.reverse());
      }
    }
  }, [news]);

  const handleClickLoadMore = () => {
    setCount((count) => count + 6);
  };

  const handleClickButton = async (e) => {
    if (
      articleen &&
      headeren &&
      newsImage &&
      articleru &&
      headerru &&
      articlege &&
      headerge
    ) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("news", newsImage);
      formData.append("articleen", articleen);
      formData.append("headeren", headeren);

      formData.append("articleru", articleru);
      formData.append("headerru", headerru);

      formData.append("articlege", articlege);
      formData.append("headerge", headerge);

      if (
        articleen &&
        headeren &&
        newsImage &&
        articleru &&
        headerru &&
        articlege &&
        headerge
      ) {
        dispatch(API.createNews(formData));
        dispatch(API.getNews());
      }

      setArticleRu("");
      setHeaderRu("");
      setArticleEn("");
      setHeaderEn("");
      setArticleGe("");
      setHeaderGe("");

      setNewsImage(null);
    }
  };

  const onInputChange = (e) => {
    setNewsImage(e.target.files[0]);
  };

  const handleClick = async (id) => {
    dispatch(API.deleteNews(id));
    dispatch(API.getNews());
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
        <p className={s.header}> Add a news </p>

        <form className={s.form}>
          <label>News Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={onInputChange}
            className={s.input}
          ></input>
          <p className={s.error}> *require</p>

          <p className={s.text}> Header in Georgian</p>
          <input
            type="text"
            placeholder="Header in Georgian"
            className={s.input}
            value={headerge}
            onChange={(e) => setHeaderGe(e.target.value)}
          />
          <p className={s.error}> *require</p>

          <p className={s.text}> Header in English</p>
          <input
            type="text"
            placeholder="Header in English"
            className={s.input}
            value={headeren}
            onChange={(e) => setHeaderEn(e.target.value)}
          />
          <p className={s.error}> *require</p>
          <p className={s.text}> Header in Russian</p>
          <input
            type="text"
            placeholder="Header in Russian"
            className={s.input}
            value={headerru}
            onChange={(e) => setHeaderRu(e.target.value)}
          />

          <p className={s.error}> *require</p>
          <p className={s.text}> Article in Georgian</p>
          <textarea
            type="text"
            placeholder="Article in Georgian"
            className={s.input}
            value={articlege}
            onChange={(e) => setArticleGe(e.target.value)}
          />
          <p className={s.error}> *require</p>
          <p className={s.text}> Article in English</p>
          <textarea
            type="text"
            placeholder="Article in English"
            className={s.input}
            value={articleen}
            onChange={(e) => setArticleEn(e.target.value)}
          />
          <p className={s.error}> *require</p>
          <p className={s.text}> Article in Russian</p>
          <textarea
            type="text"
            placeholder="Article in Russian"
            className={s.input}
            value={articleru}
            onChange={(e) => setArticleRu(e.target.value)}
          />

          <p className={s.error}> *require</p>
          <button onClick={handleClickButton} className={s.button}>
            Add
          </button>
        </form>
      </div>
      <p className={s.header1}>News </p>

      <div className={s.box1}>
        {newArr?.map((item, index) => {
            if (index <= count - 1) {
          return (
            <div className={s.boxItem}>
              <img
                className={s.image}
                src={require(`../../../images/${item?.image}`)}
              />
              <h2> Header:</h2>{" "}
              <p className={s.desc}> {item.translations[0]?.header}</p>
              <p className={s.desc}> {item.translations[1].header}</p>
              <p className={s.desc}> {item.translations[2]?.header}</p>
              <div>
                {" "}
                <h2>Article:</h2>{" "}
                <p className={s.desc1}> {item.translations[0]?.article}</p>
                <p className={s.desc1}> {item.translations[1]?.article}</p>
                <p className={s.desc1}> {item.translations[2]?.article}</p>
              </div>
              <div
                className={s.addBrand}
                onClick={() => {
                  handleClick(item?._id);
                }}
              >
                {" "}
                Delete{" "}
              </div>
            </div>
          );}
        })}
      </div>
      <div className={s.box2}>
       {count < newArr?.length && (
          <button className={s.buttonLoadMore} onClick={handleClickLoadMore}>
            {" "}
            Load More{" "}
          </button>
        )}</div>
    </div>
  );
}
export default NewsAdminPage;
