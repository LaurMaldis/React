import { Link } from 'react-router-dom';

function Tooted() {
    const tooted = JSON.parse(localStorage.getItem('tooted')) || [];

    const lisaOstukorvi = (klikitudToode) => {
        let ostukorvLS = localStorage.getItem('ostukorv');
        ostukorvLS = JSON.parse(ostukorvLS) || [];
        ostukorvLS.push(klikitudToode);
        ostukorvLS = JSON.stringify(ostukorvLS);
        localStorage.setItem('ostukorv', ostukorvLS);
    }

    return ( 
        <div>
            {tooted.map((element, index) =>
            <div key={index}>
              <Link to={'/toode/' + index}>

              <img src={element.pilt} alt='mingi pilt'></img>
              <div>{element.nimi}</div>
              <div>{element.hind} €</div>
              <div>{element.aktiivne + 0}</div>
              
              </Link>
            <button onClick={ () => lisaOstukorvi(element)}>Lisa ostukorvi</button>
            </div>)}

        </div>
     );
}

export default Tooted;