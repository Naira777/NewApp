import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const Box1 = styled.div`

// height: 100%;


`;
export const Footer = styled.div`

background: #bfbebe;
height: 100%;
width: 100%;
margin-top: 50px;

`;
export const img = styled.img`

width: 40px;
height: 40px;
margin-left:20px;
cursor: pointer;
margin-bottom:10px;

@media screen and (max-width: 425px) {
 
     margin-top:25px;
width: 25px;
height: 25px;
    
    }

`;

export const Text = styled.p`

font-size: 18px;
color: #1f1e1e;
transform: translate(10px, -10px);
@media screen and (max-width: 425px) {
  font-size: 16px;
     
    
    }
`;
export const B = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
margin-bottom: -20px;
transform: translateY(0px);

`;
export const Text1 = styled.p`

font-size: 37px;
color: #1f1e1e;
transform: translateY(30px);
text-shadow: 3px 1px 2px #7d7777;
text-align: center;
@media screen and (max-width: 425px) {
font-size: 30px;
   
  
  }


`;