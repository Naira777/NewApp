import * as Styled from "./styled"
// import emailjs from 'emailjs-com'
// import apiKeys from '../../../apikeys'

const Header = () => {

//     const onSubmit=(e)=>{

//         const from_name = document.getElementById('name').value;
//         const from_email = document.getElementById('email').value;
//         const phone = document.getElementById('phone').value;
//         const message = document.getElementById('Message').value;
// const obj = {

//     from_name: from_name,
//     from_email: from_email,
//     message: message,


// }


    // e.preventDefault()// Prevents default refresh by the browser
    // emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
    // .then(result => {
    // alert('Message Sent, I\'ll get back to you shortly', result.text);
    // },
    // error => {
    // alert( 'An error occured, Plese try again',error.text)
    // })

    // console.log(obj);
    // }



return <Styled.Box> 

<Styled.Header> CONTACT US </Styled.Header>
{/* <form className='form' onSubmit={onSubmit}>
<Styled.Text1 > Name* </Styled.Text1>
<Styled.Box1 className='form__input' id='name'>

</Styled.Box1>

<Styled.Text1 >Email* </Styled.Text1>
<Styled.Box1 id='email'>

</Styled.Box1>


<Styled.Text1>Phone* </Styled.Text1>
<Styled.Box1 id='phone'>

</Styled.Box1>

<Styled.Text1>Message* </Styled.Text1>
<Styled.Box2 className='form__input-message' id='Message'>

</Styled.Box2>

<Styled.Button className='form__input—button'> <Styled.T>SEND</Styled.T> </Styled.Button>

</form   > */}
</Styled.Box>

}
export default Header