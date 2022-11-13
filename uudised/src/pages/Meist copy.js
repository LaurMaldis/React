import { useState } from 'react';


function Meist() {
    const [ message, maaraMessage ] = useState('Vali mõni tegevus');

    return ( <div>
        <div>{message}</div>
        <button onClick={() => maaraMessage('Võta meiega ühendust wdvadok@kartul.ee')}>Kandideeri tööle</button>
        <button onClick={() => maaraMessage('Meil on 10 töötajat, info neist lisatakse lähiajal')}>Vaata meie töötajaid</button>
        <button onClick={() => maaraMessage('Ühenduse võtmiseks mine lehele Kontakt')}>Võta meiega ühendust</button>
    </div> );
}

export default Meist;