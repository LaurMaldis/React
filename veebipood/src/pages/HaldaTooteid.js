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

          <img src={element.pilt} alt='mingi pilt'></img>
          <div>{element.nimi}</div>
          <div>{element.hind} €</div>
          <div>{element.aktiivne + 0}</div>

          <button onClick={() => kustuta(index)}>KUSTUTA</button>
          <Link to={'/muuda/' + index}>
          <button>MUUDA</button>
          </Link>
        </div>)}
    
     </div> );
}

export default HaldaTooteid;