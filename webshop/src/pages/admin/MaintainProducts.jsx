import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';


const MaintainProduct = () => {
  const [dbProducts, setDbProducts ] = useState([]);
  const [ products, setProducts ] = useState([]);
  const {t} = useTranslation();
  const searchedRef = useRef();
  const dbURL = 'https://webshop-11-22-default-rtdb.europe-west1.firebasedatabase.app/products.json';


  useEffect( () => {
    fetch(dbURL)
    .then(res => res.json())
    .then(json => 
      {setProducts(json)
      setDbProducts(json)
      });
  }, []);


  const remove = (i) => {
    products.splice(i, 1);
    setProducts(products.slice());
    toast.warn(t('successfully-deleted'), {
      position: "top-right",
      theme: "dark",
      });
  };

  const searchProducts = () => {
    const result = dbProducts.filter(element => 
      element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  };


  return (
    <div>
      <input ref={searchedRef} onChange={searchProducts} type="text" />
      <div>{products.length} toodet</div>
      <br />

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