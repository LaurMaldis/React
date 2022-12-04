import { useState } from "react";
import { useRef } from "react";
import ProductsFromFile from '../../data/products.json';
import { useTranslation } from 'react-i18next';

const AddProduct = () => {

  const { t } = useTranslation();

  const [ message, setMessage ] = useState();
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

  
  const productAdd = () => {
    if (
    idRef.current.value === '',
    nameRef.current.value === '',
    priceRef.current.value === '',
    imageRef.current.value === '',
    categoryRef.current.value === '',
    descriptionRef.current.value === ''
    ) {
      setMessage(<div>{t('fillall')}</div>) 
    } else {

    const updateProductinfo = {
      'id': Number(idRef.current.value), 
      'name': nameRef.current.value,
      'price': Number(priceRef.current.value),
      'image': imageRef.current.value,
      'category': categoryRef.current.value,
      'description': descriptionRef.current.value,
      'active': activeRef.current.checked
    };
    ProductsFromFile.push(updateProductinfo);
  
  }}

  return (
    <div>

    <div>{message}</div>
      <div>
      <label>ID</label><br />
      <input ref={idRef} type="number" /> <br />
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
      <button onClick={productAdd}>{t('add')}</button>
    </div>
      
      
    </div>
  )
}

export default AddProduct;