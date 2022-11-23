import { useParams } from 'react-router-dom';

function YksikToode() {
    const { index } = useParams();
    const tooted = JSON.parse(localStorage.getItem('tooted')) || [];
    const leitudToode = tooted[ index ];  //järjekord algab nullist

    return ( 
    <div>
        <img src={leitudToode.pilt} alt='mingi pilt'></img>
        <div>{leitudToode.nimi}</div>
        <div>{leitudToode.hind} €</div>
        <div>{leitudToode.aktiivne + 0}</div>

        {leitudToode === undefined && <div>Toodet ei leitud!</div>}
    </div> );
}

export default YksikToode;