import styled from "styled-components";

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  @media (max-width: 768px) {
    margin-left: 20px;
    
           
         }
`;

export const Header = styled.p`
  font-size: 36px;
  font-weight: 750;
  margin-top: 40px;
  margin-bottom: 0px;
`;
export const Text = styled.p`
  font-size: 40px;
  opacity: 0.9;
  letter-spacing: 4px;
  margin-bottom: 10px;
  font-weight: 700;
  @media (max-width: 768px) {
  
     font-size: 20px;
         
       }
`;
export const Text1 = styled.p`
  font-size: 18px;
  font-weight: 400;
  //font-family: Georgia, serif;
  line-height: 1.8;
  opacity: 0.7;
  @media (max-width: 768px) {
  
    font-size: 20px;
       
     }
`;
export const Line = styled.div`
  background-color: red;
  height: 2px;
  width: 65px;
  border-radius: 30%;
  margin-bottom: 10px;
`;



export const Text2 = styled.p`
  color: #fd2e55;
  font-size: 11px;
  text-align: center;
  font-weight: 800;
  margin-top: 8px;
`;
