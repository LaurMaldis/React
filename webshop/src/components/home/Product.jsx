import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react'
import CartSumContext from '../../store/CartSumContext';

const Product = (props) => {
    const cartSumCtx = useContext(CartSumContext);
    const { t } = useTranslation();

    const addToCart = (productClicked) => {
        let cartLS = localStorage.getItem('cart');
        cartLS = JSON.parse(cartLS) || [];
        const index = cartLS.findIndex(element => element.product.id === productClicked.id);
        if (index >= 0 ) {
          //kui on ostukorvis, suurenda kogust
          cartLS[index].quantity = cartLS[index].quantity + 1;
        } else {
          //kui ei ole ostukorvis, lisa ta kõige lõppu kogusega 1
          cartLS.push({'product': productClicked, 'quantity':1});
        };

        let cartSum = 0;
        cartLS.forEach(e => cartSum = cartSum + e.product.price * e.quantity);
        cartSumCtx.setCartSum(cartSum.toFixed(2));

        cartLS = JSON.stringify(cartLS);
        localStorage.setItem('cart', cartLS);

      };

  return (
    <div>
        <div>

        <Link to={'/product/' + props.element.id}>
        <img src={props.element.image} alt='product'></img>
        <div>{props.element.name}</div>    
        <div>{props.element.price}€</div>

        </Link>

        <button onClick={() => addToCart(props.element)}>{t('addtocart')}</button>



        </div>
        
    </div>
  )
}

export default Product