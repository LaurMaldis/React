import {useRef} from 'react';
import {useParams} from 'react-router-dom';
function MuudaUudis() {
    const { i } = useParams();
    const naide = (JSON.parse(localStorage.getItem('uudised')) || [] );
    const leitud = naide[ i ];
    const uudisRef = useRef();

    const muuda = () => {
        naide[ i ] = uudisRef.current.value;
        localStorage.setItem('uudised', JSON.stringify(naide));
    };

    return ( 
        <div>
            <label>Uudis</label><br />
            <input ref={uudisRef} type="text" defaultValue={leitud} /><br />
            <button onClick={muuda}>Muuda</button><br />


        </div>
     );
}

export default MuudaUudis;