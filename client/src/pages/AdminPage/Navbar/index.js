import s from './index.module.css'
import { NavLink } from "react-router-dom";


function Navbar() {


 
  return (
    <div className={s.container}>


   <NavLink className={s.text} to="brands"> Brands </NavLink> 
        
   <NavLink className={s.text} to="products"> Products </NavLink> 
     <NavLink className={s.text} to="news"> News </NavLink> 
 
         


    </div>
  );
}
export default Navbar;