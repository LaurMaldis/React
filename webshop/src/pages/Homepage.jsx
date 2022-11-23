
import ProductsFromFile from '../data/products.json'

const Homepage = () => {
  
  const addToCart = () => {
    let cartLS = localStorage.getItem('cart');
  };


  return (
    <div>
    <button>Sort A-Z</button>
    <button>Sort Z-A</button>
    <button>Sort price ascending</button>
    <button>Sort price descending</button>

    {ProductsFromFile.map(element =>
    <div>
    <img src={element.image} alt='picture of product'></img>
    <div>{element.name}</div>   
    <div>{element.price}</div>
    <button onClick={addToCart}>Add to cart</button>
    </div>
    )}  
    </div> 
  )
}

export default Homepage;