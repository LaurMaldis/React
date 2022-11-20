import './App.css';
import Avaleht from './pages/Avaleht';
import Tagasiside from './pages/Tagasiside'; 
import TagasisideAndjad from './pages/TagasisideAndjad'; 
import {Link, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to=''>
      <button classname='nupp' >Avaleht</button>
      </Link>
      <Link to='tagasiside'>
      <button classname='nupp'>Tagasiside</button>
      </Link>
      <Link to='tagasisideandjad'>
      <button classname='nupp'>Tagasiside andjad</button>
      </Link>

      <Routes>
        <Route path ="" element={ <Avaleht />  } />
        <Route path ="tagasiside" element={ <Tagasiside />  } />
        <Route path ="tagasisideandjad" element={ <TagasisideAndjad />  } />
      </Routes>
    </div>
  );
}

export default App;
