import { useState} from 'react';
import {Link} from 'react-router-dom';
function HaldaUudised() {



    const [uudised, uusUudis]  = useState(JSON.parse(localStorage.getItem('uudised')) || [] );
    
    const kustuta = (i) => {
        uudised.splice(i, 1);
        uusUudis(uudised.slice());
        localStorage.setItem('uudised', JSON.stringify(uudised))
    }
    
    return ( 
        <div>

            {uudised.map((element, i) =>
            <div key={i}>
                <Link to={'/MuudaUudis/' + i}>
                {element}
                <button onClick={kustuta}>x</button>
                </Link>
            </div> ) }

        </div>
     );
}

export default HaldaUudised;