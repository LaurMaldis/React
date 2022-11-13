import { useState } from 'react';

function Kontakt() {
        const [telKristiine, uusKristiine] = useState(false);
        const [telYlemiste, uusYlemiste] = useState(false);
        const [telTasku, uusTasku] = useState(false);

    return ( 
    <div>


        <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
        <div>Võta meiega ühendust</div>
        <br />
        <div onClick={() => uusKristiine(!telKristiine)}>Kristiine keskus</div>
        {telKristiine && <div>+412341235</div>}
        <div>Endla 45</div>
        <br />
        <div onClick={() => uusYlemiste(!telYlemiste)}>Ülemiste keskus</div>
        {telYlemiste && <div>+5252532</div>}
        <div>Suur-Sõjamäe 4</div>
        <br />
        <div onClick={() => uusTasku(!telTasku)}>Tasku keskus</div>
        {telTasku && <div>+213213213</div>}
        <div>Turu 2</div>
    
    </div> );
}

export default Kontakt;