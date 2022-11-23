import albums from '../albums.json';

function Albums() {
    return ( 
    <div>

        {albums.map(element => <div key={element.id}>{element.title}</div>)}

    </div>
     );
}

export default Albums;