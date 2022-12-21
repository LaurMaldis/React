import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import AuthContext from '../store/AuthContext';
import CartSumContext from '../store/CartSumContext';
import "../css/NavBar.css"


//rafce --> et saada const baasil funktsiooni leht
const NavigationBar = () => {
  
  const cartSumCtx= useContext(CartSumContext);
  const authCtx = useContext(AuthContext);

    const { t, i18n } = useTranslation();
    const changeLang = (newLanguage) => {
        i18n.changeLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };


    const logOut = () => {
      authCtx.logout();
    };

  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Homepage</Navbar.Brand>
          <Nav className="me-auto">
            { authCtx.loggedIn === true && <Nav.Link as={Link} to='/admin'>{t('admin')}</Nav.Link>}
            <Nav.Link as={Link} to='/shops'>{t('shops')}</Nav.Link>
            <Nav.Link as={Link} to='/contact'>{t('contact-us')}</Nav.Link>
            <Nav.Link as={Link} to='/cart'>{t('cart')}</Nav.Link>
            { authCtx.loggedIn === false && <Nav.Link as={Link} to="/login">Logi sisse</Nav.Link>}
            { authCtx.loggedIn === false && <Nav.Link as={Link} to="/signup">Registreeru</Nav.Link>}
            { authCtx.loggedIn === true && <Nav.Link onClick={logOut}>Logi välja</Nav.Link>}
          </Nav>
          <div className='white'>{cartSumCtx.cartSum} €</div>
          <div><img className='lang' onClick={() => changeLang('en')} src='../uk.jpg' alt='English flag' /></div>
          <div><img className='lang' onClick={() => changeLang('ee')} src="../eesti.jpg" alt="Estonian flag" /></div>
          <div><img className='lang' onClick={() => changeLang('fi')} src="../finland.png" alt="Finnish flag" /></div>
        </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar