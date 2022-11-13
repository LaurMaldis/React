import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaArvuti from './pages/LisaArvuti';
import VaataArvuti from './pages/VaataArvuti';

function App() {
  return (
    <div>
    <Link to='/'>
      <button>Avalehele</button>
    </Link>
    <Link to='/all'>
      <button>Vaata sülearvuteid</button>
    </Link>
    <Link to='/add'>
      <button>Lisa sülearvuti</button>
    </Link>
    <Routes>
      <Route path='' exact element={ <Avaleht />} />
      <Route path='all' exact element={<VaataArvuti />} />
      <Route path='add' exact element={<LisaArvuti />} />
    </Routes>
    </div>
  );
}

export default App;
