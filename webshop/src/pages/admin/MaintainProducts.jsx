import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import {Spinner} from 'react-bootstrap';
import config from "../../data/config.json";
import '../../css/MaintainProducts.css';
// kui css faili nimi oleks MaintainProducts.module.css siis
//import styles from "../../css/MaintainProducts.module.css"
//igalpool className={styles.image} või mis iganes on nimi
//         className={styles["cart-top"]} kui sidekriips nimes 
//         classname={styles.cart__top} või topelt alakriips
//       viimases peab muutma CSS files ka nime alakriipsudega
// kui mitu panna siis 
//         className={`${styles.button} ${styles.remove}`} 
// SEda saab ainult kasutada failis kus importisid seda

const MaintainProduct = () => {
  const [dbProducts, setDbProducts ] = useState([]);
  const [ products, setProducts ] = useState([]);
  const {t} = useTranslation();
  const searchedRef = useRef();
  const [isLoading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true)
    fetch(config.productsDbUrl)
    .then(res => res.json())
    .then(json => 
      {setProducts(json.slice());  //slice-me seda sest program näeb neid muidu samasugusena
      setDbProducts(json.slice()); // slice loob neile uue mälukoha
      setLoading(false)  
    });
  }, []);


  const remove = (productClicked) => {
    const index = products.findIndex(element => element.id === productClicked.id);
    products.splice(index, 1);
    setProducts(products.slice());
    const dbindex = dbProducts.findIndex(element => element.id === productClicked.id);
    dbProducts.splice(dbindex, 1);
    toast.warn(t('successfully-deleted'), {
      position: "top-right",
      theme: "dark",
      });
      //console.log(dbProducts)
      fetch(config.productsDbUrl, {'method': 'put', 'body': JSON.stringify(dbProducts)});
  };

  const searchProducts = () => {
    const result = dbProducts.filter(element => 
      element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  };

  const changeProductActiveness = (productClicked) => {
    const index = dbProducts.findIndex(element => element.id === productClicked.id);
    dbProducts[index].active = !dbProducts[index].active; // nii saab muuta ühte väärtust vastupidiseks (võrduse taga on et muuda vastupidiseks)
    searchProducts();
    fetch(config.productsDbUrl, {"METHOD": "PUT", "BODY": JSON.stringify(dbProducts)});
  };

  if (isLoading === true) {
    return (<Spinner /> );
  };

  return (
    <div>
      <ToastContainer />
      <input ref={searchedRef} onChange={searchProducts} type="text" />
      <div>{products.length} toodet</div>
      <br />

      {products.map(element => 
      <div className={element.active === true ? "active-product" : "inactive-product"} key={element.id}> 
        <div onClick={() => changeProductActiveness(element)}>
          <img src={element.image} alt='product'></img>
          <div>{element.name}</div>   
          <div>{element.price}€</div>
          <div>{element.id}</div>
          <div>{element.description}</div>
          <div>{element.category}</div>
        </div>
        <button onClick={() => remove(element)}>x</button>
        <Link to={'/admin/edit-product/' + element.id}>
        <button>{t('change')}</button> 
        </Link>
      </div>)}

      
    </div>
  )
};

export default MaintainProduct