import { useRef, useEffect, useState } from 'react';
import  { useNavigate, useParams} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {Spinner} from 'react-bootstrap';
import config from "../../data/config.json"

const EditProduct = () => {

  const [ dbProducts, setDbProducts ] = useState([]);
  const { t } = useTranslation();
  const {id} = useParams(); 
  const productFound = dbProducts.find(element => element.id === Number(id));
  const index = dbProducts.indexOf(productFound);
  const [idUnique, setIdUnique] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
 

  useEffect( () => {
    setLoading(true)
    fetch(config.productsDbUrl)
    .then(res => res.json())
    .then(json => 
      {setDbProducts(json)
      setLoading(false);
      });
  }, []);

  const changeProduct = () => {
    const updateProduct = {
      'id': Number(idRef.current.value), 
      'name': nameRef.current.value,
      'price': Number(priceRef.current.value),
      'image': imageRef.current.value,
      'category': categoryRef.current.value,
      'description': descriptionRef.current.value,
      'active': activeRef.current.checked
    };
    dbProducts[index] = updateProduct;
    fetch(config.productsDbUrl, {'method': 'put', 'body': JSON.stringify(dbProducts)})
      .then( ()=> navigate('/admin/maintain-products'));
    
  };

  const checkIdUniqueness = () => {
    if (idRef.current.value === id) {
      setIdUnique(true);
      return; 
    } 
    
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
    {productFound !== undefined &&
    <div>
      {idUnique === false  && <div>Kellelgi on sama ID!</div>}
      <label>ID</label>
      <input ref={idRef} onChange={checkIdUniqueness} defaultValue={productFound.id} type="number" /> <br />
      <label>{t('name')}</label><br />
      <input ref={nameRef} defaultValue={productFound.name} type="text" /> <br />
      <label>{t('price')}</label><br />
      <input ref={priceRef} defaultValue={productFound.price} type="number" /> <br />
      <label>{t('immg')}</label><br />
      <input ref={imageRef} defaultValue={productFound.image} type="text" /> <br />
      <label>{t('category')}</label><br />
      <input ref={categoryRef} defaultValue={productFound.category} type="text" /> <br />
      <label>{t('description')}</label><br />
      <input ref={descriptionRef} defaultValue={productFound.description} type="text" /> <br />
      <label>{t('active')}</label><br />
      <input ref={activeRef} defaultChecked={productFound.active} type="checkbox" /> <br />
      <button disabled={idUnique === false} onClick={changeProduct}>{t('change')}</button>
    </div>}
    {productFound === undefined &&
    <div>
      {t('product-not-found')}
    </div>}

    </div>
  )
}

export default EditProduct

//SingleProducts
//1.urli muutuja kooloni abil
//2. toodete vaates saan vajutada, et läheks sellele URLIle
//3. Sinna lehele kuhu saabun, pean tegema useParams() ja võtma selle muutuja
// ehk selle koha kus asub see koolon URLis ja võtan ta kasutusele 
//4. võtan kõik tooted
//5. Otsin üles õige toote .find() abil ---- .find(element => element.id === ID_URList)
//6. kuvan ta htmlis
//7. teen dünaamilise väljakuvamise juhuks kui teda ei ole findiga leitud

//AddProduct
// 8. iga toote võtme kohta ref - kokku 7tk: id, name, price, image, category, description, active
// ref-st ka import
//9. teen 7 korda label + input
//10. teen 7 korda inputi sisse ref panemist
//11. teen nupu ja ühendan funktsiooniga
//12. funktsiooni sees seob kõik need ref.current.value -d kokku
// teisendan ref.current.value -s kõik mis on numbrid, numbriteks
// 13. lisan productsonfile (push)


//14. 7 inputi sisse defaultValue
//15. muudan productsonfile