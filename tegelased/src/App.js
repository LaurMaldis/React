import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaTegelane from './pages/LisaTegelane';
import ValitudTegelased from './pages/ValitudTegelased';

function App() {
  return (
    <div>
      <Link to='/'>
      <button>Avaleht</button>
      </Link>

      <Link to='/lisategelane'>
      <button>Lisa tegelane</button>
      </Link>

      <Link to='/valitudtegelased'>
      <button>Valitud tegelased</button>
      </Link>

      <Routes>
        <Route path='' element={<Avaleht />}>  </Route>
        <Route path='lisategelane' element={<LisaTegelane />}>  </Route>
        <Route path='valitudtegelased' element={<ValitudTegelased />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
