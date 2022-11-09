import { useState } from 'react';


function Avaleht() {
    //let kogus = 5; //let kuulutab välja uue muutuja ja võrdusmärgiga annan talle väärtuse
    const [ kogus, uuendaKogus ] = useState(0);
    const [ sonum, uuendaSonum ] = useState('');
    const [laigitud, uuendaLaigitud] = useState(false);
 
    console.log(kogus);

    function vahenda() {
       // kogus = kogus - 1; kui let oleks üleval const asemel, siis võib nii olla, muidu alumine
        uuendaKogus(kogus - 1 );
        uuendaSonum("Kogus vähendatud");
    }
    
    function suurenda(){
       // kogus = kogus + 1
        uuendaKogus(kogus + 1 );
        uuendaSonum("Kogus suurendatud");
    }

    function nulli(){
         uuendaKogus(0);
         uuendaSonum("Kogus nullitud");
     }


    return ( 
    <div>
      
        {laigitud === false && <img onClick={ () => uuendaLaigitud(true) } src='mittelaigitud.svg' alt='mittelaigitud süda pilt'></img>}
        {laigitud === true && <img onClick={ () => uuendaLaigitud(false) } src='laigitud.svg' alt='Laigitud süda pilt'></img>}
        
        <div>{sonum}</div>
        {/* <button hidden={ kogus === 0 } onClick={nulli}>Nulli ära number</button> variant kuidas veel peita nuppu*/}  
        { kogus > 0 && <button onClick={nulli}>Nulli ära number</button>}
        <br></br>
        <button disabled={ kogus === 0 } onClick={vahenda}>-</button>
        {/* loogelised sulkud ja selle sees olev sõna on viuide JS-ile */}
        <div>{kogus}</div>
        <button onClick={suurenda}>+</button>
        <div>Oled avalehel</div>
        <button>Nupuke</button> 
    </div>
    );
}

export default Avaleht;