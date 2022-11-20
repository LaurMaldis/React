import {useRef, useState} from 'react';
import nimed from '../nimed.json';


function TagasisideAndjad() {

    const [andjad, uuedAndjad] = useState(nimed);


    const filterM = () => {
        const filtreering = andjad.filter(element => element.startsWith('M'))
        uuedAndjad(filtreering);
    }

    const kuus = () => {
        const filtreering = andjad.filter(element => element.length === 6);
        uuedAndjad(filtreering);
    }

    const y = () => {
        const filtreering = andjad.filter(element => element.endsWith('y'));
        uuedAndjad(filtreering);
    }

    const ZA = () => {
        andjad.sort((a,b) => b.localeCompare(a));
        uuedAndjad(andjad.slice());
    }

    const EST = () => {
        const filtreering = andjad.map(element => 'EST' + element);
        uuedAndjad(filtreering);
    }

    const kustuta = (i) => {
        andjad.splice(i, 1);
        uuedAndjad(andjad.slice());
    }
   
    const nimiRef = useRef();
    const lisa = () => {
        andjad.push(nimiRef.current.value);
        uuedAndjad(andjad.slice());
    }

    


    return ( 
    <div>
        <label>Lisa uus nimi:</label>
        <input ref={nimiRef} type="text" />
        <button onClick={lisa}>Lisa</button>


        <div>Nimesid on {andjad.length} tk. </div>
        <button onClick={filterM}>M tähega algavad</button>
        <button onClick={kuus}>6 kohalised nimed</button>
        <button onClick={y}>y tähega lõppevad nimed</button>
        <button onClick={ZA}>Z-A</button>
        <button onClick={EST}>kõigile EST ette</button>
       
        
        { andjad.map((yksNimi, i ) =>
        <div key={i}>
            {yksNimi}
            <button onClick={() => kustuta(i)}>x</button>
            </div>)}
        
    </div>

     );
}

export default TagasisideAndjad;