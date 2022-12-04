import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProductsFromFile from '../../data/products.json'
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';


const MaintainProduct = () => {

  const [ products, setProducts ] = useState(ProductsFromFile);
  const {t} = useTranslation(


  );

  const remove = (i) => {
    ProductsFromFile.splice(i, 1);
    setProducts(ProductsFromFile.slice());
    toast.warn(t('successfully-deleted'), {
      position: "top-right",
      theme: "dark",
      });
  };



  return (
    <div>
      
      {products.map((element, index) => 
      <div key={element.id}> 
        <img src={element.image} alt='product'></img>
        <div>{element.name}</div>   
        <div>{element.price}€</div>
        <div>{element.id}</div>
        <div>{element.description}</div>
        <div>{element.category}</div>
        <button onClick={() => remove(index)}>x</button>
        <Link to={'/admin/edit-product/' + element.id}>
        <button>{t('change')}</button> 
        </Link>
      </div>)}

      <ToastContainer />
    </div>
  )
}

export default MaintainProduct