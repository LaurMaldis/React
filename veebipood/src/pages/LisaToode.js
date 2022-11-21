import { useRef, useState } from 'react';

function LisaToode() {
    const [ sonum, uuendaSonum ] = useState('Vali endale sobivad tooted.');
    const nimiViide = useRef();

    function lisa (){
        if (nimiViide.current.value === '') {
            uuendaSonum('Ei saa lisada ilma toote nimeta!')
        } else {
            
    //     {/* // EELDAKS: lisa juurde üks mida ma sisestan
      
    //   // TEGELIKKUSES:
    //   // 1. võta localStorage-st kõik varasemad väärtused
    //   // 2. võta saadud väärtustest jutumärgid maha VÕI võta tühi array kui on tühjus
    //   // 3. lisa üks juurde
    //   // 4. pane localStorage-st saadud väärtustele, kus on 1 juurde lisatud jutumärgid tagasi
    //   // 5. pane localStorage-sse tagasi
    //     */}

        let tootedLS = localStorage.getItem('tooted') || "[]"; // lõpp on et kui see on tühi, siis tee edasi mis on edasi
        tootedLS = JSON.parse(tootedLS); // || [] võib siin ka olla, aga ilma jutumärkidega
        tootedLS.push(nimiViide.current.value);
        tootedLS = JSON.stringify(tootedLS);
        localStorage.setItem('tooted', tootedLS);         // need 5 punkti on täpselt ülemise kirjeldus

        // const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
        // tooted.push(nimiViide.current.value);
        // localStorage.setItem("tooted", JSON.stringify(tooted));
        // see on täpselt sama nagu ülemine, aga natuke kompaktsem (1 ja 3 rida on 2 in 1 tehtud)

            uuendaSonum('Uus toode on lisatud: ' + nimiViide.current.value);
        };
    }

    return ( 
    <div>
        <div>{sonum}</div>
        <label>Toote nimi:</label>
        <input ref={nimiViide} type="text" />
        <br></br>
        <button onClick={lisa}>Lisa uus toode</button>
    </div> );
}

export default LisaToode;