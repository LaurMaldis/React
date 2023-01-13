import { useEffect, useState } from 'react';
import {Spinner} from 'react-bootstrap';
import config from "../data/config.json";
import "../css/Homepage.css"
import SortButtons from '../components/home/SortButtons';
import Product from '../components/home/Product';
import CarouselGallery from '../components/home/CarouselGallery';
import Pagination from 'react-bootstrap/Pagination';


const Homepage = () => {

  const [ products, setProducts ] = useState([]); //alati 20 tk(või viimasel lehel vähem)
  const [ filteredProducts, setFilteredProducts ] = useState([]); //vastavalt kategooriale 
  const [ dbProducts, setDbProducts ] = useState([]); //näidata kategooriaid välja ( alati koguarv tooteid)
  const categories = [...new Set(dbProducts.map(element => element.category))]; //duublite eemaldamiseks
  const [isLoading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory ] = useState("");
  const [activePage, setActivePage] = useState(1);
  const pages = [];
  for (let number = 1; number <= Math.ceil(filteredProducts.length/20); number++) {
    pages.push(number)
  };

  useEffect( () => {
    setLoading(true)
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json =>
        {setProducts(json.slice(0,20));
        setFilteredProducts(json);
        setDbProducts(json);
        setLoading(false);
        });
  }, []);

  const changePage = (newPage) => {
    setActivePage(newPage);
    setProducts(filteredProducts.slice(20*newPage-20,20*newPage));  // (20*(newPage-1),20*newPage) <--- see sobib ka
  };



    const filterProducts = (categoryClicked) => {
    const result = dbProducts.filter(element => element.category === categoryClicked);
    setActiveCategory(categoryClicked);
    setFilteredProducts(result);
    setProducts(result.slice(0,20));
    setActivePage(1);
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
      <h1>PS! I'm working on my own webpage. This page is just to show what I've worked with in React.</h1>
      <div>{activePage*20 > filteredProducts.length ? filteredProducts.length : activePage*20}  
      / {filteredProducts.length} tk</div>
      
      {/* <button onClick={() => {filterProducts('Samsung Cell Phones and Smartphones ')}}>Samsung Cell Phones and Smartphones </button>
      <button onClick={() => {filterProducts('Cell phones')}}>Cell phones</button>
      <button onClick={() => {filterProducts('Ebay')}}>Ebay</button> */}

      { categories.map(element => 
      <button key={element} className={element === activeCategory ? "active-category" : undefined} onClick={() => filterProducts(element)}>{element}</button>
      )}

      <Pagination>{pages.map(number => 
      <Pagination.Item key={number} onClick={() => changePage(number)} active={number === activePage}>
        {number}
        </Pagination.Item> )}
      </Pagination>

      { products.map(element => 
        <Product key={element.id} element={element} />
      )}
      

  
    </div> 
  )
}

export default Homepage;