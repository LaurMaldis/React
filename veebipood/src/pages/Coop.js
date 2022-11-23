import coopTootedFailist from '../ecoop.json'



function Coop() {
    return ( 
        <div>
            {coopTootedFailist.data.map(element => <div key={element.id}>{element.name} ( {element.price}) </div>)};




        </div>
     );
}

export default Coop;