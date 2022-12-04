import ProductsFromFile from '../data/products.json'
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Homepage = () => {
  
  const [ products, shopsNew ] = useState(ProductsFromFile);
  const { t } = useTranslation();


  const addToCart = () => {
    let cartLS = localStorage.getItem('cart');
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

      <Link to={'/SingleProduct/' + element.id}>
        <img src={element.image} alt='product'></img>
        <div>{element.name}</div>   
        <div>{element.price}€</div>
      </Link>

      <button onClick={addToCart}>{t('addtocart')}</button>
      
    
      
      </div>)}
        
  
    </div> 
  )
}

export default Homepage;