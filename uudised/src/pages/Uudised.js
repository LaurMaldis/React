import {Link} from 'react-router-dom';

function Uudised() {
    const naide = (JSON.parse(localStorage.getItem('uudised')) || [] );

    
    return ( 
    <div>
       { naide.length === 0 && <div>Ühtegi uudist hetkel pole, kuid lisame õigepea!</div>}
       
       
       { naide.map((uudis, i ) => 
       <div key={i}> 
        <Link to={'/YksUudis/' + i}>
        <div>{uudis}</div>
        </Link>
        </div>
        ) }
       
    </div> );
}

export default Uudised;