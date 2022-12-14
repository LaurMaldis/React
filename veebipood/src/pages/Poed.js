import { useRef, useState } from "react";



function Poed() {

    const [poed, muudaPoed ] = useState(
        [
            {nimi:'Kristiine', aeg:'9-22'},
            {nimi:'Põhja-Tallinn', aeg:'9-21'},
            {nimi:'Mustamäe', aeg:'8-22'},
            {nimi:'Kesklinn', aeg:'8-23'},
            {nimi:'Haabersti', aeg:'8-20'},
            {nimi:'Õismäe', aeg:'9-20'},
            {nimi:'Mustika', aeg:'24/7h'},
        ])
    
    const tyhFiltreer = () => {
        muudaPoed(
        [  
            {nimi:'Kristiine', aeg:'9-22'},
            {nimi:'Põhja-Tallinn', aeg:'9-21'},
            {nimi:'Mustamäe', aeg:'8-22'},
            {nimi:'Kesklinn', aeg:'8-23'},
            {nimi:'Haabersti', aeg:'8-20'},
            {nimi:'Õismäe', aeg:'9-20'},
            {nimi:'Mustika', aeg:'24/7h'}
    ]);
    }

    const sorteeriAZ = () => {
        poed.sort( (a,b) => a.nimi.localeCompare(b.nimi) ); 
        muudaPoed(poed.slice());
    }

    const sorteeriZA = () => { 
        poed.sort((a,b) => b.nimi.localeCompare(a.nimi));
        muudaPoed(poed.slice());
    }

    const filtreeri = () => {
        const tagastus = poed.filter(element => element.nimi.endsWith('mäe')); //sobib ka element.includes('mäe');
        muudaPoed(tagastus);
    }

    const filtr = () => {
        const tagastus = poed.filter(element => element.nimi.charAt(1) === 'i');
        muudaPoed(tagastus);
    }
    
    const muudaIgayht = () => {
        const tagastus = poed.map(element => {return {nimi: '--' + element, aeg: element.aeg}});
        muudaPoed(tagastus);
    }

    const vaikeTaht = () => {
        const tagastus = poed.map(element => {return {nimi: element.nimi.toLowerCase(), aeg: element.aeg}} );
        muudaPoed(tagastus);
    }

    const pikkus = () => {
        poed.sort((a,b) => a.nimi.length - b.nimi.length);
        muudaPoed(poed.slice());
    }

    const kustuta = (j2rjekorraNumber) => {
        poed.splice(j2rjekorraNumber, 1);
        muudaPoed(poed.slice());
    };

    const poodRef = useRef();
    const aegRef = useRef();

    const lisaPood = () => {
        poed.push({nimi: poodRef.current.value, aeg: aegRef.current.value});
        muudaPoed(poed.slice());
    };

    return ( 
    <div>
        <label>Uus pood</label>
        <input ref={poodRef} type="text" />
        <label>Uue poe lahtioleku aeg</label>
        <input ref={aegRef} type="text" />
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
            {yksPood.nimi} {yksPood.aeg}
            <button onClick={() => kustuta(i)}>x</button>
        </div> ) }

    </div> );
}

export default Poed;