import {useState} from 'react';


function Ostukorv() {
    const [ostukorv, muudaKorv] = useState(JSON.parse(localStorage.getItem('ostukorv')) || [] );
    
    const kustuta = (index) => {
      ostukorv.splice(index, 1);
      muudaKorv(ostukorv.slice());
      localStorage.setItem('ostukorv', JSON.stringify(ostukorv));
    };

    const tyhjenda = () => {
        muudaKorv([]);
        localStorage.setItem('ostukorv', JSON.stringify([]));
    };

    const lisa = (toode) => {
        ostukorv.push(toode);
        muudaKorv(ostukorv.slice());
        localStorage.setItem('ostukorv', JSON.stringify(ostukorv));
    };

    const kogusumma = () => {
      let summa= 0;
      ostukorv.forEach(element => summa = summa + element.hind)
      return summa;
    };


    return ( 
      <div>
        <div>Ostukorvi kogusumma: {kogusumma()} €</div>


        { ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button> }
        { ostukorv.length === 0 && <div>Ostukorvis on tühi.</div> }
        { ostukorv.length === 1 && <div>Ostukorvis on 1 ese.</div> }   
        { ostukorv.length > 1 && <div>Ostukorvis on {ostukorv.length} eset.</div> }

        { ostukorv.map((element, index) => 
        <div key={index}>

          <img src={element.pilt} alt='mingi pilt'></img>
          <div>{element.nimi}</div>
          <div>{element.hind} €</div>
          <div>{element.aktiivne + 0}</div>

        <button onClick={() => kustuta(index)}>-</button>
        <button onClick={() => lisa(element)}>+</button>
        </div> ) }




      </div>  );
}

export default Ostukorv;