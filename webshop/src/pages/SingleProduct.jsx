import { useParams } from "react-router-dom";
import ProductsFromFile from '../data/products.json'

const SingleProduct = () => {

  const {id} = useParams();
  const productFound = ProductsFromFile.find(element => element.id === Number(id));
  
  return (
    <div>
      {productFound !== undefined &&
    <div>


      {ProductsFromFile.map(element =>
      <div key={element.id}>
      <img src={element.image} alt='product'></img>
      <div>{element.name}</div>   
      <div>{element.price}€</div>
      </div>
      )} 


    </div>}


    {productFound === undefined &&
    <div>
      Toodet ei leitud
    </div>}
    
    </div>
  )
}

export default SingleProduct