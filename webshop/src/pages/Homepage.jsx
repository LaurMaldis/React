import ProductsFromFile from '../data/products.json'
import { useState } from 'react';
const Homepage = () => {
  
  const [ shops, shopsNew ] = useState(ProductsFromFile);

  const addToCart = () => {
    let cartLS = localStorage.getItem('cart');
  };

  const AtoZ = () => {
      shops.sort( (a,b) => a.name.localeCompare(b.name));
      shopsNew(shops.slice());  
  };

  const ZtoA = () => {
    shops.sort( (a,b) => b.name.localeCompare(a.name));
    shopsNew(shops.slice());  
  }; 

  const priceAsc = () => {
    shops.sort((a,b) => a.price - b.price);
    //shops.sort( (a,b) => a.price.localeCompare(b.price) );ˇei tööta siin
    shopsNew(shops.slice());
  };

  const priceDesc = () => {
    shops.sort((a,b) => b.price - a.price);
    shopsNew(shops.slice());
  } 


  return (
    <div>
    <button onClick={AtoZ}>Sort A-Z</button>
    <button onClick={ZtoA}>Sort Z-A</button>
    <button onClick={priceAsc}>Sort price ascending</button>
    <button onClick={priceDesc}>Sort price descending</button>

    {ProductsFromFile.map(element =>
    <div key={element.id}>
    <img src={element.image} alt='picture of product'></img>
    <div>{element.name}</div>   
    <div>{element.price}€</div>
    <button onClick={addToCart}>Add to cart</button>
    </div>
    )}  
    </div> 
  )
}

export default Homepage;