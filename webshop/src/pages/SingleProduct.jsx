import { useParams } from "react-router-dom";
import ProductsFromFile from '../data/products.json'

const SingleProduct = () => {

  const {id} = useParams();
  const productFound = ProductsFromFile.find(element => element.id === Number(id));
  
  return (
    <div>

      <div key={productFound.id}>
      <img src={productFound.image} alt='product'></img>
      <div>{productFound.name}</div>   
      <div>{productFound.price}€</div>
      <div>{productFound.category}</div>  
      <div>{productFound.description}</div>  
      </div>
    
    </div>
  )
}

export default SingleProduct