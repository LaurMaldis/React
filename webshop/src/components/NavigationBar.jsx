import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';

//rafce --> et saada const baasil funktsiooni leht
const NavigationBar = () => {
    const { t, i18n } = useTranslation();
    const changeLang = (newLanguage) => {
        i18n.changeLanguage(newLanguage);
        localStorage.setItem('language', newLanguage)
      }


  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Homepage</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/admin'>{t('admin')}</Nav.Link>
            <Nav.Link as={Link} to='/shops'>{t('shops')}</Nav.Link>
            <Nav.Link as={Link} to='/contact'>{t('contact-us')}</Nav.Link>
            <Nav.Link as={Link} to='/cart'>{t('cart')}</Nav.Link>
          </Nav>
          <div><img className='lang' onClick={() => changeLang('en')} src='../uk.jpg' alt='English flag' /></div>
          <div><img className='lang' onClick={() => changeLang('ee')} src="../eesti.jpg" alt="Estonian flag" /></div>
          <div><img className='lang' onClick={() => changeLang('fi')} src="../finland.png" alt="Finnish flag" /></div>
        </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar