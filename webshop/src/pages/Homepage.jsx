import { useEffect, useState } from 'react';
import {Spinner} from 'react-bootstrap';
import config from "../data/config.json";
import "../css/Homepage.css"
import SortButtons from '../components/home/SortButtons';
import Product from '../components/home/Product';
import CarouselGallery from '../components/home/CarouselGallery';


const Homepage = () => {

  const [ products, setProducts ] = useState([]);
  const [ dbProducts, setDbProducts ] = useState([]);
  const categories = [...new Set(dbProducts.map(element => element.category))]; //duublite eemaldamiseks
  const [isLoading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory ] = useState("");

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

    const filterProducts = (categoryClicked) => {
    const result = dbProducts.filter(element => element.category === categoryClicked);
    setActiveCategory(categoryClicked);
    setProducts(result);
  };

  if (isLoading) {
    return (<Spinner />);
  };

  return (
    <div>
      <CarouselGallery />

      {/* Teise faili pean faili enda funktsiooni props lisama sulgude sisse ja igalpool funktsiooni ette panema props */}
      <SortButtons
      products={products}
      setProducts={setProducts} /> 
    <div>{products.length} tk</div>
      
      {/* <button onClick={() => {filterProducts('Samsung Cell Phones and Smartphones ')}}>Samsung Cell Phones and Smartphones </button>
      <button onClick={() => {filterProducts('Cell phones')}}>Cell phones</button>
      <button onClick={() => {filterProducts('Ebay')}}>Ebay</button> */}

      { categories.map(element => 
      <button key={element} className={element === activeCategory ? "active-category" : undefined} onClick={() => filterProducts(element)}>{element}</button>
      )}

      { products.map(element => 
        <Product key={element.id} element={element} />
      )}
      
        
  
    </div> 
  )
}

export default Homepage;