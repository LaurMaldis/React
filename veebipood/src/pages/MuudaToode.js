import {useNavigate, useParams} from 'react-router-dom';
import { useRef } from 'react';

function MuudaToode() {
    const { jj } = useParams();
    const tooted = JSON.parse(localStorage.getItem('tooted')) || [] ;
    const leitudToode = tooted[jj] ;

    const nimiRef = useRef();
    const navigate = useNavigate();

    const muuda = () => {
        tooted[jj] = nimiRef.current.value;
        localStorage.setItem('tooted', JSON.stringify(tooted));
        navigate('/halda');
    }

    return ( 
    <div>
        <label >Toote nimi</label>
        <input ref={nimiRef} defaultValue={leitudToode} type="text" />
        <button onClick={muuda}>Muuda</button>

    </div> );
}

export default MuudaToode;