import {Route, Routes, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { useState } from 'react';

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
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  const changeLang = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage)
  }


  return (
    <div className='App'>
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Homepage</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/admin'>{t('admin')}</Nav.Link>
            <Nav.Link as={Link} to='/shops'>{t('shops')}</Nav.Link>
            <Nav.Link as={Link} to='/cart'>{t('cart')}</Nav.Link>
          </Nav>
          <div><img className='lang' onClick={() => changeLang('en')} src='../uk.jpg' alt='English flag' /></div>
          <div><img className='lang' onClick={() => changeLang('ee')} src="../eesti.jpg" alt="Estonian flag" /></div>
          <div><img className='lang' onClick={() => changeLang('fi')} src="../finland.png" alt="Finnish flag" /></div>
        </Container>
      </Navbar>

      <Routes>
        <Route path='' element={ <Homepage /> }/>
        <Route path='cart' element={ <Cart /> }/>
        <Route path='shops' element={ <Shops /> }/>
        <Route path='product/:id' element={ <SingleProduct /> }/>
        <Route path='admin' element={ <AdminHome /> }/>
        <Route path='admin/add-product' element={ <AddProduct /> }/>
        <Route path='admin/edit-product/:id' element={ <EditProduct /> }/>
        <Route path='admin/maintain-categories' element={ <MaintainCategories /> }/>
        <Route path='admin/maintain-shops' element={ <MaintainShops /> }/>
        <Route path='admin/maintain-products' element={ <MaintainProduct /> }/>
      </Routes>

    </div>
  );
}

export default App;
