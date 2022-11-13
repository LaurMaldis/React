import { useState, useRef } from 'react';

function LisaTegelane() {
    const [sonum, uusSonum ] = useState('');
    const nimiViide = useRef();

    function lisa (){
        if (nimiViide.current.value === '') {
            uusSonum('Tühja nimega ei saa lisada!')
        } else {
            uusSonum('Uus tegelane on lisatud: ' + nimiViide.current.value);
        };
    }

    return ( 
        <div>
            <div>{sonum}</div>
            <label>Lisa tegelane:</label>
            <input ref={nimiViide} type="text" />
            <br />
            <button onClick={lisa}>Lisa uus</button>

        </div>
     );
}

export default LisaTegelane;