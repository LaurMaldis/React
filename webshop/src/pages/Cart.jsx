
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../css/Cart.css';
import ParcelMachines from "../components/cart/ParcelMachines";
import Payment from  "../components/cart/Payment"

const Cart = () => {

// KODUS: Ostukorvi loogika eesti keelse projekti järgi
  // Kuvage välja kõik ostukorvi esemed
  // a) peast   b) proovida mõne kodutöö järgi   c) eesti keelsest projektist vaadata
    const { t } = useTranslation();
    const [ cartLS, newCart ]  = useState(JSON.parse(localStorage.getItem('cart')) || []);
    



  const removeFromCart = (index) => {
    cartLS.splice(index, 1);
    newCart(cartLS.slice());
    localStorage.setItem('cart', JSON.stringify(cartLS));
  };

  

  const decreaseQuantity = (index) => {
    cartLS[index].quantity = cartLS[index].quantity - 1;
    if (cartLS[index].quantity === 0 ) {
      removeFromCart(index);
    };
    newCart(cartLS.slice());
    localStorage.setItem('cart', JSON.stringify(cartLS));
  };

  const increaseQuantity = (index) => {
    cartLS[index].quantity = cartLS[index].quantity + 1;
    newCart(cartLS.slice());
    localStorage.setItem('cart', JSON.stringify(cartLS));
  };

  const emptyCart = () => {
    newCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };


  const calculateCartSum = () => {
    let cashout= 0;
    cartLS.forEach(e => cashout = cashout + e.product.price * e.quantity);
    return cashout.toFixed(2);
  };


   // useNavigate -> suuna JavaScriptis Reacti siseselt
   // Link => suuna htmls reacti siseselt
   // window.location.href => suuna rakendusest väljas olevale URLile

   
  return (
    <div>

      <div className='cart-top'>
        { cartLS.length > 0 && <button onClick={emptyCart}>{t('empty')}</button> }
        { cartLS.length === 0 && <div>{t('cartIsEmpty')} <Link to='/'>{t('toAddPro')}</Link></div> }
        { cartLS.length === 1 && <div>{t('cartOneProd')}</div> }   
        { cartLS.length > 1 && <div>{t('inCart')} {cartLS.length} {t('itms')}.</div> }
      </div>



     
        { cartLS.map((element, index) => 
        
        <div className='product' key={index}>
          <img className='image' src={element.product.image} alt='pic of product'></img>
          <div className='name' >{element.product.name}</div>
          <div className='price' >{element.product.price.toFixed(2)} €</div>
        <div  className='quantity'>
          <img className='button' onClick={() => decreaseQuantity(index)} src="/minus.png" alt="remove pic" />
          <div>{element.quantity} tk</div>
          <img className='button' onClick={() => increaseQuantity(index)} src="/plus.png" alt="add pic" />
        </div>
          <div className='sum' >{(element.product.price * element.quantity).toFixed(2)} €</div>
          <img className='button remove' onClick={() => removeFromCart(index)} src="/bin.png" alt="bin pic" />
        
      </div> ) }
      
      { cartLS.length > 0 &&
          <div className='cart-bottom'>
            <div>{t('cartTotal')}: {calculateCartSum()}€ </div><br />

            <ParcelMachines />

            <Payment sum={calculateCartSum()} />
        </div>}

      
    </div>
  )
}

export default Cart