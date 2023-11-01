import React, { useEffect, useState } from "react";
import Text from "../Text/Text";
import * as Styled from "./styled";
import Gallery1 from './Gallery1';
import Gallery2 from './Gallery2';


const  Gallery = () => {
  
const [mode, setMode] = useState (false);



const handleOnClick = () => {

if(!mode){
setMode(true)
}
else {
  setMode(false)
}
}

  return (
  <Styled.BoxAll>
   
    
   {!mode &&  <Gallery1 anim={!mode}/>

}
     {mode &&  <Gallery2 anim={mode}/>
 }

  <Styled.All>
 <Styled.Box1 onClick={handleOnClick} >
 <Styled.ArrowLeft xmlns="http://www.w3.org/2000/svg" width="20" height="40" fill="#797979" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</Styled.ArrowLeft>
</Styled.Box1>

<Styled.Box2 onClick={handleOnClick}>
<Styled.ArrowRight xmlns="http://www.w3.org/2000/svg" width="20" height="40" fill="#797979" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</Styled.ArrowRight>
</Styled.Box2>


</Styled.All>
</Styled.BoxAll>
  );
};
export default Gallery;
