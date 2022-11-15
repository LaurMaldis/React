import { useState } from "react";


function Seaded() {
    const [ kujundus, muudaKujundus ] = useState (localStorage.getItem('veebilehe_kujundus'));

    const tume = () => {
         localStorage.setItem('veebilehe_kujundus','dark_mode');
         muudaKujundus('dark_mode');
        }

    const hele = () => {
        localStorage.setItem('veebilehe_kujundus','light_mode');
        muudaKujundus('light_mode');
    }

    const kirju = () => {
        localStorage.setItem('veebilehe_kujundus','colored_mode');
        muudaKujundus('colored_mode');
    }


    return ( 
    <div>

    <br />

    <button onClick={tume}>TUME LEHT</button>
    <br />
    <button onClick={hele}>HELE LEHT</button>
    <br />
    <button onClick={kirju}>KIRJU LEHT</button>
    <br />
    { kujundus === 'dark_mode' && <div>TUME LEHT </div>}
    { kujundus === 'light_mode' && <div>HELE LEHT </div>}
    { kujundus === 'colored_mode' && <div>KIRJU LEHT </div>}
    

    </div>
     );
}

export default Seaded;