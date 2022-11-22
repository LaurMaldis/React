import {useParams} from 'react-router-dom';
function YksUudis() {
    const { i } = useParams();
    const naide = (JSON.parse(localStorage.getItem('uudised')) || [] );
    const leitud = naide[i];
    return ( 
        <div>

        {leitud}

        </div>
     );
}

export default YksUudis;