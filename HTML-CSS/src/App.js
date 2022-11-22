import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { useRef, useState } from 'react';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';
import Kodu from './pages/Kodu';

function App() {
  const [ sisselogitud, muudaSisselogitud ] = useState('ei');
  const [ sonum, uusSonum] = useState('');
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();


  const logiSisse = () => {
    if (paroolRef.current.value === '123') {
    muudaSisselogitud('jah');
    uusSonum(kasutajaNimiRef.current.value + ', oled sisselogitud');
    } else 
      uusSonum('Vale parool!');
  }


  
  return (
    <div className='App'>
      <div>{sonum}</div>
      { sisselogitud ==='ei' &&
       <div>
        <label>Kasutajanimi:</label>
        <br />
        <input ref={kasutajaNimiRef} type="text" />
        <br />
        <label>Parool:</label>
        <br />
        <input ref={paroolRef} type="password" />
      </div> }
      
      <br />
     { sisselogitud === 'ei' && <button onClick={ logiSisse }>Logi sisse</button> }
     { sisselogitud === 'jah' && <button onClick={ () =>muudaSisselogitud('ei') }>Logi välja</button> }
      
      
      
      
      
      <div>Siin on varasem kodutöö---</div>
      <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='/kontakt'>
        <button>Kontakt</button>
      </Link>
      <Link to='/meist'>
        <button>Meist</button>
      </Link>
      <Link to='/seaded'>
        <button>Seaded</button>
      </Link>
      <Link to='/kodu'>
        <button>kodu</button>
      </Link>
      
   	  <Routes>
        <Route path='' element={ <Avaleht />}/>
        <Route path='kontakt' element={ <Kontakt /> }/>   
        <Route path='meist' element={ <Meist /> }/>
        <Route path='seaded' element={ <Seaded /> }/>
        <Route path='kodu' element={ <Kodu /> }/>
      </Routes>
    </div>
  );
}

export default App;
