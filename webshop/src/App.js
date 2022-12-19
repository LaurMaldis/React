import {Route, Routes} from 'react-router-dom';

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
import {ContactUs} from './pages/ContactUs';
import NavigationBar from './components/NavigationBar';


function App() {

  return (
    <div className='App'>
    
    <NavigationBar />


      <Routes>
        <Route path='' element={ <Homepage /> }/>
        <Route path='cart' element={ <Cart /> }/>
        <Route path='shops' element={ <Shops /> }/>
        <Route path='product/:id' element={ <SingleProduct /> }/>
        <Route path='contact' element={ <ContactUs /> }/>
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
