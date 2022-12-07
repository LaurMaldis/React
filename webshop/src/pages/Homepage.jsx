import ProductsFromFile from '../data/products.json'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Homepage = () => {
  
  const [ products, shopsNew ] = useState(ProductsFromFile);
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
    cartLS = JSON.stringify(cartLS);
    localStorage.setItem('cart', cartLS);
  };

  const AtoZ = () => {
      products.sort( (a,b) => a.name.localeCompare(b.name));
      shopsNew(products.slice());  
  };

  const ZtoA = () => {
    products.sort( (a,b) => b.name.localeCompare(a.name));
    shopsNew(products.slice());  
  }; 

  const priceAsc = () => {
    products.sort((a,b) => a.price - b.price);
    //shops.sort( (a,b) => a.price.localeCompare(b.price) );ˇei tööta siin
    shopsNew(products.slice());
  };

  const priceDesc = () => {
    products.sort((a,b) => b.price - a.price);
    shopsNew(products.slice());
  } 

  


  return (
    <div>
    <button onClick={AtoZ}>{t('sortAZ')}</button>
    <button onClick={ZtoA}>{t('sortZA')}</button>
    <button onClick={priceAsc}>{t('priceascending')}</button>
    <button onClick={priceDesc}>{t('pricedescending')}</button>

      
      
      {products.map(element =>
      <div key={element.id}>

      <Link to={'/Product/' + element.id}>
        <img src={element.image} alt='product'></img>
        <div>{element.name}</div>    
        <div>{element.price}€</div>

      </Link>

      <button onClick={() => addToCart(element)}>{t('addtocart')}</button>
      
    
      
      </div>)}
        
  
    </div> 
  )
}

export default Homepage;