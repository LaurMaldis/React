
import { useState, useContext  } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../css/Cart.css';
import ParcelMachines from "../components/cart/ParcelMachines";
import Payment from  "../components/cart/Payment"
import CartSumContext from '../store/CartSumContext';
import OrderEmail from '../components/cart/OrderEmail';

const Cart = () => {

// KODUS: Ostukorvi loogika eesti keelse projekti järgi
  // Kuvage välja kõik ostukorvi esemed
  // a) peast   b) proovida mõne kodutöö järgi   c) eesti keelsest projektist vaadata
    const { t } = useTranslation();
    const [ cart, newCart ] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const cartSumCtx = useContext(CartSumContext);



  const removeFromCart = (index) => {
    cart.splice(index, 1);
    newCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
    cartSumCtx.setCartSum(calculateCartSum());
  };

  

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0 ) {
      removeFromCart(index);
    };
    newCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart)); 
    cartSumCtx.setCartSum(calculateCartSum());
  };

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    newCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
    cartSumCtx.setCartSum(calculateCartSum());
  };

  const emptyCart = () => {
    newCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
    cartSumCtx.setCartSum("0.00");
  };


  const calculateCartSum = () => {
    let cashout= 0;
    cart.forEach(e => cashout = cashout + e.product.price * e.quantity);
    return cashout.toFixed(2);
  };


   // useNavigate -> suuna JavaScriptis Reacti siseselt
   // Link => suuna htmls reacti siseselt
   // window.location.href => suuna rakendusest väljas olevale URLile

   
  return (
    <div>

      <div className='cart-top'>
        { cart.length > 0 && <button onClick={emptyCart}>{t('empty')}</button> }
        { cart.length === 0 && <div>{t('cartIsEmpty')} <Link to='/'>{t('toAddPro')}</Link></div> }
        { cart.length === 1 && <div>{t('cartOneProd')}</div> }   
        { cart.length > 1 && <div>{t('inCart')} {cart.length} {t('itms')}.</div> }
      </div>



     
        { cart.map((element, index) => 
        
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
      
      { cart.length > 0 &&
          <div className='cart-bottom'>
            <div>{t('cartTotal')}: {calculateCartSum()}€ </div><br />

            <ParcelMachines />

            <Payment sum={calculateCartSum()} />
            <OrderEmail products={cart}
            sum={calculateCartSum()} />
        </div>}

      
    </div>
  )
}

export default Cart