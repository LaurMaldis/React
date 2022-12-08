import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const SingleProduct = () => {

  const {id} = useParams();
  const [ products, setProducts ] = useState([]);
  const productFound = products.find(element => element.id === Number(id));
  const dbURL = 'https://webshop-11-22-default-rtdb.europe-west1.firebasedatabase.app/products.json';


  useEffect( () => {
    fetch(dbURL)
    .then(res => res.json())
    .then(json => setProducts(json));
  }, []);
  
  
  return (
    <div>
      {productFound !== undefined &&
      <div>
        <div key={productFound.id}>
        <img src={productFound.image} alt='product'></img>
        <div>{productFound.name}</div>   
        <div>{productFound.price}€</div>
        <div>{productFound.category}</div>  
        <div>{productFound.description}</div>  
        </div>
      </div>}
      {productFound === undefined &&
      <div>
        Toodet ei leitud!
      </div>}
    </div>
  )
}

export default SingleProduct