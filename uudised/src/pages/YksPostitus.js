import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function YksPostitus() {
   
    const { PostituseId } = useParams();
    const [postitus, uuendaPostitus] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                    const result = data.filter(element => element.id === Number(PostituseId));
                    uuendaPostitus(result);
            });
    }, [PostituseId]);

    return ( 
        <div>
        { postitus?.map(element => 
        <div key={element.id}>
            <div><i>{element.userId}</i></div>
            <div><u>{element.id}</u></div>
            <div><b>{element.title}</b></div>
            <div>{element.body}</div>
        </div>) }
        </div>
     );
}

export default YksPostitus
;