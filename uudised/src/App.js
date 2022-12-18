import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Uudised from './pages/Uudised';
import Seaded from './pages/Seaded';
import Lisauudis from './pages/Lisauudis';
import HaldaUudised from './pages/HaldaUudised';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';
import KasutajaPostitus from './pages/KasutajaPostitus';
import YksPostitus from './pages/YksPostitus';

function App() {
  return (
    <div>
      <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='/uudised'>
        <button>Uudiste lehele</button>
      </Link>
      <Link to='/kontakt'>
        <button>Võta meiega ühendust</button>
      </Link>
      <Link to='/meist'>
        <button>Info meist</button>
      </Link>
      <Link to='/seaded'>
        <button>Seadetesse</button>
      </Link>
      <Link to='/lisauudis'>
        <button>Lisa uudis</button>
      </Link>
      <Link to='/HaldaUudised'>
        <button>Halda uudised</button>
      </Link>
    
  

   	  <Routes>
        <Route path='' element={ <Avaleht />}/>
        <Route path='uudised' element={ <Uudised /> }/>
        <Route path='kontakt' element={ <Kontakt /> }/>   
        <Route path='meist' element={ <Meist /> }/>
        <Route path='seaded' element={ <Seaded /> }/>
        <Route path='lisauudis' element={ <Lisauudis /> }/>
        <Route path='HaldaUudised' element={ <HaldaUudised /> }/>
        <Route path='/YksUudis/:i' element={ <YksUudis /> }/>
        <Route path='/MuudaUudis/:i' element={ <MuudaUudis /> }/>
        <Route path='/KasutajaPostitus/:kasutajaId' element={ <KasutajaPostitus /> }/>
        <Route path='/Vaata-postitus/:PostituseId' element={ <YksPostitus /> }/>
      </Routes>
    </div>
  );
}

export default App;
