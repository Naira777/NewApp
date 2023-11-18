import { useEffect, useState } from "react";
import s from "./index.module.css";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/Products/slice";

function App() {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [mode, setMode]=useState(false)
  const [error, setError]=useState(false)
  const { isLogin } = useSelector((state) => state.products);

const dispatch= useDispatch()

console.log(isLogin)

useEffect(()=>{

if(mode || ( localStorage.getItem('password') && localStorage.getItem('login')) ){

  dispatch(logIn(true))
  setError(false)


}else{
  
  dispatch(logIn(false))
}


},[mode, localStorage.getItem('password'), localStorage.getItem('login')])




const handleClick =()=> {
  

if(password ==="georgia111" && login==='Giorgi'){
setMode(true)
dispatch(logIn(true))
localStorage.setItem("login", 'Giorgi')
localStorage.setItem("password", 'georgia111')
setLogin('')
setPassword('')


}else{
  setError(true)
}


}






const handleClickLogOut =()=> {

  setMode(false)
  localStorage.clear()
  dispatch(logIn(false))
}

  return (
    <>
  {!isLogin ? <div className={s.container}>
      <p className={s.text}>Admin </p>

    {error && <p className={s.error}>Login or password is incorrect</p>}
      <input className={s.input} placeholder="login" value={login} onChange={(e)=>setLogin(e.target.value)}/>
     
      <input className={s.input} placeholder="password"   value={password} onChange={(e)=>setPassword(e.target.value)} />

      <button className={s.button} onClick={handleClick}>Log In</button>
    </div>:

     <div>
      <p className={s.log} onClick={handleClickLogOut}>Log out</p>

    <p className={s.header}>Admin Page</p>

        <Navbar />

      </div> }
      </>
  );
}
export default App;
