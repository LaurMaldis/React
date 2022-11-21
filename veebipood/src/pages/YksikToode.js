import { useParams } from 'react-router-dom';

function YksikToode() {
    const { index } = useParams();
    const tooted = JSON.parse(localStorage.getItem('tooted')) || [];
    const leitudToode = tooted[ index ];  //järjekord algab nullist

    return ( 
    <div>
        
        <div>{leitudToode}</div>
        {leitudToode === undefined && <div>Toodet ei leitud!</div>}
    </div> );
}

export default YksikToode;