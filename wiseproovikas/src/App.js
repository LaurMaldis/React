import {Link, Route, Routes} from 'react-router-dom'
import './App.css';
import Article from './pages/Article';
import Home from './pages/Home';
import List from './pages/List';
import SinglePage from './pages/Singlepage';


function App() {
  return (
    <div className="App">

    <div><img className="bottompicture" src="https://proovitoo.twn.ee/assets/imgs/bg-deco-left.svg" alt="" /></div>
    <div><img className="upperpicture" src="https://proovitoo.twn.ee/assets/imgs/bg-deco-right.svg" alt=""/></div>

    <div className="sidebar">
      <Link to="">
      <img  className="sidebar-image" src="https://proovitoo.twn.ee/assets/imgs/logo.svg" alt=""/>
      </Link>
      <Link>
      <div className="clicks1">NÕUDED</div> <br />
      </Link>
      <Link to="/article">
      <div className="clicks">ARTIKKEL</div> <br />
      </Link>
      <Link to="/list">
      <div className="clicks">TABEL</div> <br />
      </Link>
      <Link>
      <div className="clicks">GAME OF LIFE</div> 
      </Link>
    </div>
      

      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="article" element={<Article />} />
        <Route path="list" element={<List />} />
        <Route path="article/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
