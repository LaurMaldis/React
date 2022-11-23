import {useNavigate, useParams} from 'react-router-dom';
import { useRef } from 'react';

function MuudaToode() {
    const { jj } = useParams();
    const tooted = JSON.parse(localStorage.getItem('tooted')) || [] ;
    const leitudToode = tooted[jj] ;

    const nimiRef = useRef();
    const hindRef = useRef();
    const piltRef = useRef();
    const activeRef = useRef();
    const navigate = useNavigate();

    const muuda = () => {

        const muudatudToode = {
            'nimi': nimiRef.current.value, 
            'hind': Number(hindRef.current.value), 
            'pilt': piltRef.current.value, 
            'aktiivne': activeRef.current.checked, 
        }

        tooted[jj] = muudatudToode;
        localStorage.setItem('tooted', JSON.stringify(tooted));
        navigate('/halda');
    }

    return ( 
    <div>
        <label >Toote nimi</label>
        <input ref={nimiRef} defaultValue={leitudToode.nimi} type="text" /> <br />
        <label >Toote hind</label>
        <input ref={hindRef} defaultValue={leitudToode.hind} type="number" /> <br />
        <label >Toote pilt</label>
        <input ref={piltRef} defaultValue={leitudToode.pilt} type="text" /> <br />
        <label >Toote aktiivus</label>
        <input ref={activeRef} defaultValue={leitudToode.aktiivne} type="checkbox" /> <br />
        <button onClick={muuda}>Muuda</button>

    </div> );
}

export default MuudaToode;