import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Avaleht() {
    const [postitused, uuendaPostitused] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => uuendaPostitused(data));
    }, []);


    return ( 
    <div>
        <div>See on avaleht, nähtav localhost:3000 aadressil</div>
        { postitused?.map(element => 
        <div key={element.id}>
            <div><i>{element.userId}</i></div>
            <div><u>{element.id}</u></div>
            <div><b>{element.title}</b></div>
            <div>{element.body}</div>
            <Link to={"/KasutajaPostitus/" + element.userId}>
                <button>Kõik kasutaja postitused</button>
            </Link>
              <Link to={"/Vaata-postitus/" + element.id}>
                <button>Vaata postitust</button>
            </Link>
            
        </div>) }
        
    </div> );
}

export default Avaleht;