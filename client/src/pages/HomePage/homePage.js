
import React, { useRef } from 'react'
import Brands from './Brands';
import Middle from '../Middle/Middle';
import Last from '../Last/Last';
import First from '../First/First';
import ProductsPage from './ProductPage';
import ContactPage from '../ContactPage';



function HomePage() {
  const contactRef = useRef(null);
   const aboutRef = useRef(null);
 const productsRef = useRef(null);

  const handleClickContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickProducts = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  

  return (


    <div >

      <First handleClick1={handleClickContact} 
      handleClick2={handleClickAbout}  
      handleClick3={handleClickProducts} 
      />
      <Middle ref1={aboutRef} /> 
      <ProductsPage ref1={productsRef}/> 
      <Brands />
      <ContactPage ref1={contactRef}   />
     
           <Last />
  </div>
  );
}

export default HomePage;