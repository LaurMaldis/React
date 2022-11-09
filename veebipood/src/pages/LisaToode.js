import { useRef, useState } from 'react';

function LisaToode() {
    const [ sonum, uuendaSonum ] = useState('Vali endale sobivad tooted.');
    const nimiViide = useRef();

    function lisa (){
        if (nimiViide.current.value === '') {
            uuendaSonum('Ei saa lisada ilma toote nimeta!')
        } else {
            uuendaSonum('Uus toode on lisatud: ' + nimiViide.current.value);
        };
    }

    return ( 
    <div>
        <div>{sonum}</div>
        <label>Toote nimi:</label>
        <input ref={nimiViide} type="text" />
        <br></br>
        <button onClick={lisa}>Lisa uus toode</button>
    </div> );
}

export default LisaToode;