import albums from '../albums.json';

function Albums() {
    return ( 
    <div>

        {albums.map(element => <div>{element.title}</div>)}

    </div>
     );
}

export default Albums;