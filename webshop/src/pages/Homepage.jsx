import { useEffect, useState } from 'react';
import {Spinner} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from "../data/config.json";

const Homepage = () => {

  const { t } = useTranslation();
  const [ products, setProducts ] = useState([]);
  const [ dbProducts, setDbProducts ] = useState([]);
  const categories = [...new Set(dbProducts.map(element => element.category))]; //duublite eemaldamiseks
  const [isLoading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true)
    fetch(config.productsDbUrl)
    .then(res => res.json())
    .then(json =>
      {setProducts(json)
      setDbProducts(json)
      setLoading(false)
      });
  }, []);


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
      setProducts(products.slice());  
  };

  const ZtoA = () => {
    products.sort( (a,b) => b.name.localeCompare(a.name));
    setProducts(products.slice());  
  }; 

  const priceAsc = () => {
    products.sort((a,b) => a.price - b.price);
    //products.sort( (a,b) => a.price.localeCompare(b.price) );ˇei tööta siin
    setProducts(products.slice());
  };

  const priceDesc = () => {
    products.sort((a,b) => b.price - a.price);
    setProducts(products.slice());
  };

    const filterProducts = (categoryClicked) => {
    const result = dbProducts.filter(element => element.category === categoryClicked);
    setProducts(result);
  };

  if (isLoading) {
    return (<Spinner />);
  };



  return (
    <div>
    <button onClick={AtoZ}>{t('sortAZ')}</button>
    <button onClick={ZtoA}>{t('sortZA')}</button>
    <button onClick={priceAsc}>{t('priceascending')}</button>
    <button onClick={priceDesc}>{t('pricedescending')}</button>
    <div>{products.length} tk</div>
      
      {/* <button onClick={() => {filterProducts('Samsung Cell Phones and Smartphones ')}}>Samsung Cell Phones and Smartphones </button>
      <button onClick={() => {filterProducts('Cell phones')}}>Cell phones</button>
      <button onClick={() => {filterProducts('Ebay')}}>Ebay</button> */}

      { categories.map(element => 
      <button key={element} onClick={() => filterProducts(element)}>{element}</button>
      )}


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