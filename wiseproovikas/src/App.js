import {Link, Route, Routes} from 'react-router-dom'
import './App.css';
import Article from './pages/Article';
import List from './pages/List';



function App() {
  return (
    <div className="App">
      <Link to="/article">
      Artikkel
      </Link> <br />
      <Link to="/list">
      Tabel
      </Link>
      

      <Routes>
        <Route path="article" element={<Article />} />
        <Route path="list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
