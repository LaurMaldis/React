import {Route, Routes, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

import './App.css';

import Homepage from './pages/Homepage';
import Shops from './pages/Shops';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import MaintainProduct from './pages/admin/MaintainProducts';


function App() {

  const [ lang, langNew ] = useState(localStorage.getItem('language'));

  const estonian = () => {
    localStorage.setItem('language', 'est');
    langNew('est');
  }

  const english = () => {
    localStorage.setItem('language','eng');
    langNew('est');
  }

  return (
    <div className='App'>
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Homepage</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/admin'>Admin</Nav.Link>
            <Nav.Link as={Link} to='/shops'>Shops</Nav.Link>
            <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
            <Nav.Link onClick={estonian}><img src="https://i.ak24.ee/img_prd/13/13146/eesti-lipp-kleebis-117x76mm.jpg" alt="Estonian flag" width='40' height='20' /></Nav.Link>
            <Nav.Link onClick={english}><img src='https://cdn.pixabay.com/photo/2013/07/13/14/17/united-kingdom-162452__340.png' alt='English flag' width='40' height='20'  ></img> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div>
      {lang === 'est' && <div>Page is now Estonian</div> }
      {lang === 'eng' && <div>Page is now English </div> }

      </div>



      <Routes>
        <Route path='' element={ <Homepage /> }/>
        <Route path='cart' element={ <Cart /> }/>
        <Route path='shops' element={ <Shops /> }/>
        <Route path='product' element={ <SingleProduct /> }/>
        <Route path='admin' element={ <AdminHome /> }/>
        <Route path='add-product' element={ <AddProduct /> }/>
        <Route path='edit-product' element={ <EditProduct /> }/>
        <Route path='maintain-categories' element={ <MaintainCategories /> }/>
        <Route path='maintain-shops' element={ <MaintainShops /> }/>
        <Route path='maintain-products' element={ <MaintainProduct /> }/>
      </Routes>

    </div>
  );
}

export default App;
