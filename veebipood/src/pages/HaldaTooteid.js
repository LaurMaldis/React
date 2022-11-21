import { useState } from 'react'
import {Link} from 'react-router-dom';

function HaldaTooteid() {
    const [tooted, muudaTooted] = useState(JSON.parse(localStorage.getItem('tooted')) || []);
    
    const kustuta = (index) => {
        tooted.splice(index,1);
        muudaTooted(tooted.slice()); //HTMLi uuendus
        localStorage.setItem('tooted', JSON.stringify(tooted)); // key sisu salvestus
    }

   // const muuda = (index) => {}

    return ( 
     <div>
      {tooted.map((element, index) => 
        <div key={index}>
          {element}
          <button onClick={() => kustuta(index)}>KUSTUTA</button>
          <Link to={'/muuda/' + index}>
          <button>MUUDA</button>
          </Link>
        </div>)}
    
     </div> );
}

export default HaldaTooteid;