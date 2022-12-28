import { useRef } from "react"
import emailjs from '@emailjs/browser'


const OrderEmail = (props) => {
const emailRef = useRef();
const nameRef = useRef();



const sendOrderEmail = () => {
    const orderProducts = 
    "<ol>" + 
      props.products.map((element) => `
        <li>
            ${element.product.name} - 
            ${element.product.price} € - 
            ${element.quantity} tk - 
            <span style="font-weight: bold;">${element.quantity*element.product.price} € </span>
            <img style="width:50px; height: 50px;" src=${element.product.image} alt=""/> 
            </li>`).join("") + 
    "</ol>";

    const templateParams = {
        client_name: nameRef.current.value,
        client_email: emailRef.current.value,
        order_products: orderProducts,
        cart_sum: props.sum
    };

    emailjs.send('service_2ao7z2h', 'template_5ntn20o', templateParams, 'ZWfxK-nAmTMnPzcg3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };






  return (
    <div>
        <label>Sinu e-mail</label><br />
        <input ref={emailRef} type="text" /><br />
        <label>Sinu nimi</label><br />
        <input ref={nameRef} type="text" /><br />
        <button onClick={sendOrderEmail}>Telli</button>
    </div>
  )
}

export default OrderEmail