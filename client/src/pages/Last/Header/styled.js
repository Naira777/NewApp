import styled from "styled-components"

export const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
letter-spacing: 2px;
margin-top: -80px;

`

export const Box1 = styled.input`

box-shadow: 2px 2px 10px  #C9D6DA;
width: 550px;
height: 50px;
margin-bottom: -20px;

border: none;

&:focus {
    outline: none;   
   border: 0.1px solid #BBC4CF;
}
`
export const Box2 = styled.textarea`
//border: 0.1px solid #94A4A9;
box-shadow: 2px 1px 10px  #C9D6DA;
width: 550px;
height: 120px;
border: none;
&:focus {
    outline: none;
   border: 0.1px solid #BBC4CF;
}
 

`
export const Header = styled.p`
font-size: 30px;
color: #F7A223;
font-weight: 600;
letter-spacing: 0px;


`
export const Text1 = styled.p`
font-size: 16px;
color: #7B7D7E;
letter-spacing: 1px;
margin-left: 10px;
transform: translate(-255px, 18px);
`

export const Button = styled.button`

background: #F78523;
width: 130px;
height: 50px;
margin-top: 60px;
border: none;
&:focus{
    outline: none;
    background: #CE5304;
   
}
&:hover {
   transform: scale(1.03);
    box-shadow: 2px 5px 5px #8AACD2;
}
`
export const T = styled.p`
font-size: 15px;
color: #ffffff;
margin-top: 15px;
font-weight: 600;
letter-spacing: 1px;


`