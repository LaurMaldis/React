import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Happy from './pages/Happy';
import Sad from './pages/Sad';
import Screaming from './pages/Screaming';

function App() {
  return (
    <div className="App">
      <img className='main-picture' src='https://i.kym-cdn.com/entries/icons/facebook/000/029/498/Frog_relaxing_0-9_screenshot.jpg' alt='Istuv konn'></img>    
      <div className='algus'>Tere! Koostasin selle lehe konnadest, sest miks mitte. </div>
      <div className='rectangle'></div>

      <div className='navigation-pictures'>
      <Link className='main-link' to='happy'>
      <img src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/happy-frog-663-kevin-chippindall.jpg' alt='õnnelik konn'></img>
      <p>Õnneliku konna lehele</p>
      </Link>
      
      <Link className='main-link' to='sad'>
      <img src='https://i1.sndcdn.com/artworks-000329925816-3yu1fd-t500x500.jpg' alt='kurb konn'></img>
      <p>Kurva konna lehele</p>
      </Link>

      <Link className='main-link' to='screaming'>
      <img src='https://www.obilityb2b.com/wp-content/uploads/2019/10/Screaming-Frog-e1572896027504.jpg' alt='Karjuv konn'></img>
      <p>Karjuva konna lehele</p>
      </Link>
      
      </div>

      <iframe width='200' height='115' src='https://www.youtube.com/embed/ksbYZ9bDWSA' title='Youtube video häälitsevast konnast'></iframe>
      
      <Routes>
        <Route path='happy' element={ <Happy />}></Route>
        <Route path='sad' element={<Sad />}></Route>
        <Route path='screaming' element={<Screaming />}></Route>
      </Routes>
      <a className='facebook-button' href='https://www.facebook.com'>
        <img src='/facebook.png' alt='facebooki logo'></img>
      </a>
    </div>
  );
}

export default App;
