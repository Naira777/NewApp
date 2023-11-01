import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: -160px;
  color: #ffffff;
`;

export const T = styled.div`

margin-top: 30px;
font-size: 35px;
font-weight: 600;
transition: transform 2s;
transform:${(props) => (props.mode ? "translate(-0px,300px)" : "")} ;
  
@media (max-width: 768px) {
    font-size: 24px;
   
      transform:${(props) => (props.mode ? "translate(50px,300px)" : "")} ;
       
         }
}

`;

export const T3 = styled.div`
  font-size: 30px;
  font-weight: 600;
  width: 80vw;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-right: 80px;
  }
`;

export const TextB = styled.div`
  font-size: 35px;
  font-weight: 700;
  width: 80vw;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const Box1 = styled.div`
  margin-bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: -150px;
  color: #ffffff;

  @media (max-width: 768px) {
    margin-top: -110px;
  }

  @media (max-width: 450px) {
    margin-top: -140px;
  }

  @media (max-width: 330px) {
    margin-top: -110px;
  }
`;

export const T1 = styled.div`
  font-size: 30px;
  font-weight: 600;
  transition: transform 2s;
  width: 30vw;
  transform: ${(props) => (props.mode ? "translate(390px,260px)" : "")};

  @media (max-width: 768px) {
    font-size: 25px;
    transform: ${(props) => (props.mode ? "translate(280px,250px)" : "")};
  }

  @media (max-width: 450px) {
    font-size: 25px;
    transform: ${(props) => (props.mode ? "translate(120px,150px)" : "")};
  }
`;

export const TextB1 = styled.div`
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;
export const T11 = styled.div`
  font-size: 25px;
  font-weight: 600;
  transition: transform 2s;
  width: 50vw;
  transform: ${(props) => (props.mode ? "translate(-390px,470px)" : "")};

  @media (max-width: 925px) {
    transform: ${(props) => (props.mode ? "translate(-150px,550px)" : "")};

    font-size: 18px;

    width: 100vw;
  }

  @media (max-width: 768px) {
    transform: ${(props) => (props.mode ? "translate(-110px,450px)" : "")};

    font-size: 18px;

    width: 100vw;
  }
  @media (max-width: 450px) {
    transform: ${(props) => (props.mode ? "translate(-70px,380px)" : "")};

    font-size: 18px;

    width: 100vw;
  }
`;
