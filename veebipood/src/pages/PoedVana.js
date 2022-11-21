import { useRef, useState } from "react";

// .sort muudab järjekorda (a,b)
// .filter vähendab
// .map asendab igaüht (kogus jääb samaks)
// .splice (mitmendatKustutam, mituTükkiKustutan) 
// .

function PoedVana() {
  //  const poed = ['Kristiine','Põhja-Tallinn','Mustamäe','Kesklinn','Haabersti','Õismäe','Mustika'] ;
    const [poed, muudaPoed ] = useState(['Kristiine','Põhja-Tallinn','Mustamäe','Kesklinn','Haabersti','Õismäe','Mustika'])
    
    const tyhFiltreer = () => {
        muudaPoed(['Kristiine','Põhja-Tallinn','Mustamäe','Kesklinn','Haabersti','Õismäe','Mustika']);
    }

    const sorteeriAZ = () => {
        poed.sort(); //poed.sort((a,b ) => a.localeCompare(b)) ka variant
        muudaPoed(poed.slice());
    }

    const sorteeriZA = () => { 
        poed.sort();  //poed.sort((a,b ) => -1 * a.localeCompare(b)) ka variant
        poed.reverse(); //poed.sort((a,b ) => b.localeCompare(a)) ka variant
        muudaPoed(poed.slice());
    }

    const filtreeri = () => {
        const tagastus = poed.filter(element => element.endsWith('mäe')); //sobib ka element.includes('mäe');
        muudaPoed(tagastus);
    }

    const filtr = () => {
        const tagastus = poed.filter(element => element.charAt(1) === 'i');
        muudaPoed(tagastus);
    }
    
    const muudaIgayht = () => {
        const tagastus = poed.map(element => '--' + element);
        muudaPoed(tagastus);
    }

    const vaikeTaht = () => {
        const tagastus = poed.map(element => element.toLowerCase());
        muudaPoed(tagastus);
    }

    const pikkus = () => {
        poed.sort((a,b) => a.length - b.length);
        muudaPoed(poed.slice());
    }

    const kustuta = (j2rjekorraNumber) => {
        poed.splice(j2rjekorraNumber, 1);
        muudaPoed(poed.slice());
    };

    const poodRef = useRef();
    const lisaPood = () => {
        poed.push(poodRef.current.value);
        muudaPoed(poed.slice());
    };

    return ( 
    <div>
        <label>Uus pood</label>
        <input ref={poodRef} type="text" />
        <button onClick={lisaPood}>Sisesta</button>




        <button onClick={tyhFiltreer}>Tühista filtreering</button>
        <br />
        <button onClick={sorteeriAZ}>Järjesta tähestiku alusel</button>
        <button onClick={sorteeriZA}>Tagurpidi tähestiku alusel</button>
        <button onClick={filtreeri}>Filtreeri mäe lõpuga</button>
        <button onClick={filtr}>Filtreeri 'i' teise tähena</button>
        <button onClick={muudaIgayht}>Muuda igaüht</button>
        <button onClick={vaikeTaht}>Muuda kõik väikseks</button>
        <button onClick={pikkus}>Pikkuste järgi</button>

        { poed.map((yksPood, i) => 
        <div key={i}>
            {yksPood}
            <button onClick={() => kustuta(i)}>x</button>
        </div> ) }

        <div>----------</div>
        <div>Kristiine</div>
        <div>Põhja-Tallinn</div>
        <div>Mustamäe</div>
        <div>Kesklinn</div>
        <div>Haabersti</div>
        <div>Õismäe</div>
        <div>Mustika</div>


    </div> );
}

export default PoedVana;