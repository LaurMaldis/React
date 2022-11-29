import { useState } from "react";
import { useRef } from "react";
import ProductsFromFile from '../../data/products.json';

const AddProduct = () => {

  const [ setMessage ] = useState();
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

  
  const productAdd = () => {
    if (nameRef.current.value === '') {
      setMessage('Ei saa lisada ilma toote nimeta!')
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

      <div>
      <label>ID</label><br />
      <input ref={idRef} type="number" /> <br />
      <label>Name</label><br />
      <input ref={nameRef} type="text" /> <br />
      <label>Price</label><br />
      <input ref={priceRef} type="number" /> <br />
      <label>Image</label><br />
      <input ref={imageRef} type="text" /> <br />
      <label>Category</label><br />
      <input ref={categoryRef} type="text" /> <br />
      <label>Description</label><br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>Active</label><br />
      <input ref={activeRef} type="checkbox" /> <br />
      <button onClick={productAdd}>Lisa</button>
    </div>
      
      
    </div>
  )
}

export default AddProduct;