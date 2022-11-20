import {useRef, useState} from 'react';

function Tagasiside(){
const [ tagasisided, muudaList ] = useState (['Oli hea', 'Huvitav', 'Teistsugune', 'Põnev']);
const kustuta = (i) => {
    tagasisided.splice(i,1);
    muudaList(tagasisided.slice());
}

const sideRef = useRef();
const lisaside = () => {
    tagasisided.push(sideRef.current.value);
    muudaList(tagasisided.slice());
}

    return ( 
    <div>
        <div>Tagasisided:</div>
    <div>

        { tagasisided.map((element, i) =>
        <div key={i}>
            {element}
        <button onClick={() => kustuta(i)}>x</button>
        </div> ) }

        <br />

        <label>Lisa uus tagasiside:</label>
        <input ref={sideRef} type="text" />
        <button onClick={lisaside}>Sisesta</button>


    </div>
    




        




    </div>);
}

export default Tagasiside;