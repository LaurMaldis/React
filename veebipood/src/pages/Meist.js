import { useState } from 'react';

function Meist() {
    const [ telefon, muudaTelefon ] = useState(localStorage.getItem('telefon')  || ' lisame peagi');
    const [ naitaEmail, muudaEmail ] = useState(false);
    

    return ( 
        <div>
            <div>Meie telefon:
            {telefon} 
            {telefon.startsWith('+372') === false && telefon !==' lisame peagi' &&
            <button onClick={() => muudaTelefon('+372' + telefon)}>Lisa suunakood</button> }
            </div>
            <div>Meie email: 
            { naitaEmail === true && localStorage.getItem('email') }
            { naitaEmail === false && <button onClick={() => muudaEmail(true)} >Näita emaili</button> }
            </div>

        </div>
     );
}

export default Meist;