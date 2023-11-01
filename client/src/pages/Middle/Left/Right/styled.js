import styled from "styled-components";

export const Right= styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  margin-left: 40px;
  @media (max-width: 768px) {
  
    flex-direction: column;
    margin-left:15px;
  width:100vw;
  align-items:center;
       
     }
   @media (max-width: 950px) {
  
 
    margin-left:35px;
    width:90vw;

       
     }
`;
export const Box = styled.div`
  
height: 260px;
width: 260px;
box-shadow: 1px 1px 10px #CFD6D7;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 20px;

&:hover{
transform: scale(1.1);
}

@media (max-width: 768px) {
  
  height: 200px;
  width: 160px;
  margin-bottom:20px;

       
     }


`;

export const Header = styled.p`
  font-size: 36px;
  font-weight: 750;
  margin-top: 40px;
  margin-bottom: 0px;

  @media (max-width: 768px) {
  
    font-size: 20px;
       
     }
`;
export const Text = styled.p`
  font-size: 19px;
  opacity: 1;  
  margin-bottom: 5px;
  font-weight: 700;
  @media (max-width: 768px) {
  font-size: 13px;
         
       }
`;
export const Text1 = styled.p`
  font-size: 15px;
  font-weight: 400;
  //font-family: Georgia, serif;
  line-height: 1.8;
  opacity: 0.7;
  @media (max-width: 768px) {
 font-size: 11px;
         
       }
`;



export const Text2 = styled.p`
  color: #fd2e55;
  font-size: 11px;
  text-align: center;
  font-weight: 800;
  margin-top: 8px;
`;


