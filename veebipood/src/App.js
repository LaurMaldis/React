//   import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from "./pages/Avaleht";
import Ostukorv from "./pages/Ostukorv";
import LisaToode from "./pages/LisaToode";
import HaldaTooteid from './pages/HaldaTooteid';
import MuudaToode from './pages/MuudaToode';
import Poed from './pages/Poed';
import Seaded from './pages/Seaded';
import YksikToode from './pages/YksikToode';


/*Kui miski ei toimi, siis 2 kohta kust vaadata on kus npm start
töötab (cmd kaust), või siis veebileht - inspect - console*/

//komplimeerimise errorid - must/hall taust, kus on kirjelndatud mis on viga
//kontrollin kus npm start töötab, et selected midagi ei oleks

//runtime errorid - leht on üleni valge
//teine võimalus viga leida on veebileht - inspect - console*/

function App() {
  return (
    <div className="App">
    <Link to="/">
      <img className="pilt" src="data:image/jpeg;base64,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" 
      alt="" />
    </Link>

    <Link to="/ostukorv">
      <button className="nupp">Ostukorvi</button>
    </Link>
    
    <Link to="/lisa-toode">
      <button className="nupp">Toodet lisama</button>
    </Link>

    <Link to="/halda">
      <button className="nupp">Haldama</button>
    </Link>

    <Link to="/poed">
      <button className="nupp">Poed</button>
    </Link>

    <Link to="/seaded">
      <button className="nupp">Seaded</button>
    </Link>

    <Routes>
      <Route path ="" element={ <Avaleht />  } />
      <Route path ="ostukorv" element={ <Ostukorv /> } />
      <Route path ="lisa-toode" element={ <LisaToode /> } />
      <Route path ='halda' element={<HaldaTooteid />} />
      <Route path ='muuda' element={<MuudaToode />} /> 
      <Route path ='poed' element={<Poed />} />
      <Route path ='seaded' element={<Seaded />} />
      <Route path ='toode' element={<YksikToode />} />
    </Routes>
    
    </div>
  );
}

export default App;
