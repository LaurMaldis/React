import { useState, useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import config from "../../data/config.json"
// hookid   use algusega: useState, useRef, useParams, useNavigate, useTranslate
// Reacti erikoodid, mida ei eksisteeri tavalises JavaScriptis, lihtsustab
// Hooke tuleb alati importida
// Hookidel on alati sulud lõpus kui neid luuakse
// Hooke ei saa luua dünaamiliselt ega funktsioonide seas
// Hookid peaksid alati olema top-level componendi sees

const AddProduct = () => {

  const { t } = useTranslation();
  const [idUnique, setIdUnique] = useState(true);
  const [ message, setMessage ] = useState();
  const [ dbProducts, setDbProducts ] = useState([]);
  const [isLoading, setLoading] = useState(false);
 
  useEffect( () => {
    fetch(config.productsDbUrl)
    .then(res => res.json())
    .then(json => {
      setDbProducts(json)
      setLoading(false)
    });
  }, []);

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  //const productsDbUrl = 'https://webshop-11-22-default-rtdb.europe-west1.firebasedatabase.app/products.json';
  
  
  const productAdd = () => {
    if (
    idRef.current.value === '' ||
    nameRef.current.value === '' ||
    priceRef.current.value === '' ||
    imageRef.current.value === '' ||
    categoryRef.current.value === '' ||
    descriptionRef.current.value === ''
    ) {
      setMessage(<div>{t('fillall')}</div>) 
    } else {

    const newProduct = {
      'id': Number(idRef.current.value), 
      'name': nameRef.current.value,
      'price': Number(priceRef.current.value),
      'image': imageRef.current.value,
      'category': categoryRef.current.value,
      'description': descriptionRef.current.value,
      'active': activeRef.current.checked
    };
    dbProducts.push(newProduct);
    fetch(config.productsDbUrl, {'method': 'put', 'body': JSON.stringify(dbProducts)})
      .then(() => {
        idRef.current.value = '';
        nameRef.current.value = '';
        priceRef.current.value = '';
        imageRef.current.value = '';
        categoryRef.current.value = '';
        descriptionRef.current.value = '';
        activeRef.current.checked = false;
        toast.success('successfully-added', {
          position: "top-right",
          theme: "dark",
          });
      });

  }};

  const checkIdUniqueness = () => {
    console.log(idRef.current.value);
    const found = dbProducts.find(element => element.id === Number(idRef.current.value));
    if (found === undefined) {
      setIdUnique(true);
    } 
    else {
      setIdUnique(false);
    }
  };

  if (isLoading === true) {
    return (<Spinner /> );
  };

  return (
    <div>
      <ToastContainer />
      {idUnique === false  && <div>Kellelgi on sama ID!</div>}

    <div>{message}</div>
      <div>
      <label>ID</label><br />
      <input ref={idRef} onChange={checkIdUniqueness} type="number" /> <br />
      <label>{t('name')}</label><br />
      <input ref={nameRef} type="text" /> <br />
      <label>{t('price')}</label><br />
      <input ref={priceRef} type="number" /> <br />
      <label>{t('immg')}</label><br />
      <input ref={imageRef} type="text" /> <br />
      <label>{t('category')}</label><br />
      <input ref={categoryRef} type="text" /> <br />
      <label>{t('description')}</label><br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>{t('active')}</label><br />
      <input ref={activeRef} type="checkbox" /> <br />
      <button disabled={idUnique === false} onClick={productAdd}>{t('add')}</button>
    </div>
      

    </div>
  )
}

export default AddProduct;