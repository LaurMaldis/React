import { useRef } from 'react';
import  { useNavigate, useParams } from 'react-router-dom';
import ProductsFromFile from '../../data/products.json'


const EditProduct = () => {

  const {id} = useParams();
  const productFound = ProductsFromFile.find(element => element.id === Number(id))
  const index = ProductsFromFile.indexOf(productFound);
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();

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
    ProductsFromFile[index] = updateProduct;
    navigate('/admin/maintain-products');
  }

  return (
    <div>
    {productFound !== undefined &&
    <div>
      <label>ID</label>
      <input ref={idRef} defaultValue={productFound.id} type="number" /> <br />
      <label>Name</label><br />
      <input ref={nameRef} defaultValue={productFound.name} type="text" /> <br />
      <label>Price</label><br />
      <input ref={priceRef} defaultValue={productFound.price} type="number" /> <br />
      <label>Image</label><br />
      <input ref={imageRef} defaultValue={productFound.image} type="text" /> <br />
      <label>Category</label><br />
      <input ref={categoryRef} defaultValue={productFound.category} type="text" /> <br />
      <label>Description</label><br />
      <input ref={descriptionRef} defaultValue={productFound.description} type="text" /> <br />
      <label>Active</label><br />
      <input ref={activeRef} defaultChecked={productFound.active} type="checkbox" /> <br />
      <button onClick={changeProduct}>Muuda</button>
    </div>}
    {productFound === undefined &&
    <div>
      Toodet ei leitud
    </div>}

    </div>
  )
}

export default EditProduct

//SingleProducts
//1.urli muutuja kooloni abil
//2. toodete vaat es saan vajutada, et lähek sellele URLIle
//3. Sinna lehele kuhu saabun, pean tegema useParams() ja võtma selle muutuja
// ehk selle koha kus asub see koolon URLis ja võtan ta kasutusele 
//4. võtan kõik tooted
//5. Otsin üles õige toote .find() abil ---- .find(element => element.id === ID_URList)
//6. kuvan ta htmlis
//7. teen dünaamilise väljakuvamise juhuks kui teda ei ole findiga leitud

//AddProduct
// 8. iga toote võtme kohta ref - kokku 8tk: id, name, price, image, category, description, active
// ref-st ka import
//9. teen 7 korda label + input
//10. teen 7 korda inputi sisse ref panemist
//11. teen nupu ja ühendan funktsiooniga
//12. funktsiooni sees seob kõik need ref.current.value -d kokku
// teisendan ref.current.value -s kõik mis on numbrid, numbriteks
// 13. lisan productsonfile (push)


//14. 7 inputi sisse defaultValue
//15. muudan productsonfile