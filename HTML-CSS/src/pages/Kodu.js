import {useState} from 'react';
function Kodu() {

    const [kartul, uusKartul] = useState([ 'shoes','shirts','socks','sweaters','pigs','goats','sheep','spray','limit','elite','exuberant','destruction','present','March','Jan','Feb','Dec' ]);

    const mitu = kartul.length;

    const tyhFiltreer = () => {
        uusKartul([ 'shoes','shirts','socks','sweaters','pigs','goats','sheep','spray','limit','elite','exuberant','destruction','present','March','Jan','Feb','Dec' ])
    };

    const jarj = () => {
        kartul.sort( (a,b) => a.localeCompare(b) );
        uusKartul(kartul.slice());
        //kartul.sort();
        //uusKartul(kartul.slice());
    };

    const kustuta = (jknr) => {
        kartul.splice(jknr, 1);
        uusKartul(kartul.slice());
    };

    const neli = () => {
        const tagastus = kartul.filter(element => element.length > 4);
        uusKartul(tagastus);
    };

    const loomad = () => {
        kartul.push('chickens','cats','dogs');
        uusKartul(kartul.slice());
    }

    return ( 
    <div>
        <br />

        <button onClick={tyhFiltreer}>Tühista filtrid</button>
        <button onClick={jarj}>A -> Z</button>
        <button onClick={neli}>Neli tähte vähemalt</button>
        <button onClick={loomad}>3 uut looma</button>
        
        <div>{mitu}</div>
        

        { kartul.map((yksKartul, i) => 
        <div key={i}>
            {yksKartul}
            <button onClick={ () => kustuta(i)}>x</button>

        </div> ) }


    </div>

     );
}

export default Kodu;