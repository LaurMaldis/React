//import ProductsFromFile from '../data/products.json'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Cart = () => {

// KODUS: Ostukorvi loogika eesti keelse projekti järgi
  // Kuvage välja kõik ostukorvi esemed
  // a) peast   b) proovida mõne kodutöö järgi   c) eesti keelsest projektist vaadata
    const { t } = useTranslation();
    const [ cartLS, newCart ]  = useState(localStorage.getItem('cart') || []);
    //const [ products, shopsNew ] = useState(ProductsFromFile);

  const removeFromCart = (index) => {
    cartLS.splice(index,1);
    newCart(cartLS.slice());
    localStorage.setItem('cart', cartLS);
  };

  const addExtra = (productsClicked) => {
    cartLS.push(productsClicked);
    newCart(cartLS.slice());
    localStorage.setItem('cart', cartLS);
  };

  const emptyCart = () => {
    newCart([]);
    localStorage.setItem('cart', []);
  };


  const calculateCartSum = () => {
    let cashout= 0;
    cartLS.forEach(element => cashout = cashout + element.price);
    return cashout;
  };


   // dünaamiline väljakuvamine: kui ostukorv on tühi

   
  return (
    <div>
      <div>{t('cartTotal')}: {calculateCartSum()}€ </div>
      
        { cartLS.length > 0 && <button onClick={emptyCart}>{t('empty')}</button> }
        { cartLS.length === 0 && <div>{t('cartIsEmpty')}</div> }
        { cartLS.length === 1 && <div>{t('cartOneProd')}</div> }   
        { cartLS.length > 1 && <div>{t('inCart')} {cartLS.length} {t('itms')}.</div> }

     
         { cartLS.map((element, index) => 
        <div key={index}>

          <img src={element.image} alt='pic of product'></img>
          <div>{element.name}</div>
          <div>{element.price} €</div>
          <div>{element.active + 0}</div>

        <button onClick={() => removeFromCart(index)}>-</button>
        <button onClick={() => addExtra(element)}>+</button>
        </div> ) }
  
    </div>
  )
}

export default Cart