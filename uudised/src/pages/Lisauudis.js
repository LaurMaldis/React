import {useRef} from 'react';

function Lisauudis() {

    const uudisRef = useRef();

    const Lisauudisuus = () => {
        let uudised = localStorage.getItem('uudised') ; 
        uudised = JSON.parse(uudised) || [];
        uudised.push(uudisRef.current.value); 
        uudised = JSON.stringify(uudised);
        localStorage.setItem('uudised', uudised);  

    }

    return ( 
    <div>
        <label>Uudise nimi</label>
        <input ref={uudisRef} type="text" />
        <button onClick={Lisauudisuus}>Lisa</button>
    </div>

     );
}

export default Lisauudis;