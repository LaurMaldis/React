import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import {Spinner} from 'react-bootstrap';
import config from "../data/config.json"

const SingleProduct = () => {

  const {id} = useParams();
  const [ dbproducts, setDbProducts ] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const productFound = dbproducts.find(element => element.id === Number(id));
  


  useEffect( () => {
    setLoading(true)
    fetch(config.productsDbUrl)
    .then(res => res.json())
    .then(json =>     
      {setDbProducts(json)
      setLoading(false);
      });
  }, []);
  
  if (isLoading === true) {
    return (<Spinner /> );
  }; 

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