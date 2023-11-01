import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  width:90vw;
  margin-left:30px;
 
  @media (max-width: 1270px) {
    flex-direction: column;
        
     }
`;

export const Box1 = styled.div``;

export const Box2 = styled.div`
  margin-right: 250px;
  margin-left: 5px;
`;
export const Pic = styled.img`
  width: 280px;
  height: 150px;
  transform: rotate(-20deg);
  border-radius: 40%;
  margin-left: 150px;
  margin-top: -100px;
  position: absolute;
  z-index: -1;
`;
