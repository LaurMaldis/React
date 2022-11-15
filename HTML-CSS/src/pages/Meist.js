import { useState } from 'react';


function Meist() {
        const [ kontakt, naitaKontakt] = useState ('');

    return ( <div>
        <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
        <div>Meie töötajad:</div>
        <br />
        <div>Ants Metsast</div>
        <div>Tõsine Puuraidur</div>
        <button onClick={() => naitaKontakt('+412341445')}>Võta ühendust </button>
        <br /><br />
        <div>Viodor Välgutaja</div>
        <div>Taskulambi mees</div>
        <button onClick={() => naitaKontakt('+52525333')}>Võta ühendust </button>
        <br /><br />
        <div>Kalle Kella</div>
        <div>Kella tilistaja</div>
        <button onClick={() => naitaKontakt('+21321533')}>Võta ühendust </button>
        <br /><br />
        <div>Malle Tuline</div>
        <div>Tuliste pottide keerutaja</div>
        <button onClick={() => naitaKontakt('+333555333')}>Võta ühendust </button>
        <br />
        { kontakt !== '' && <div>Tema kontakt: {kontakt}</div>}
    </div> );
}

export default Meist;