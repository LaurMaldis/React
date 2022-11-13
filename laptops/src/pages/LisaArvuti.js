import { useState } from 'react'; 

function LisaArvuti () {
    const [message, setMesssage] = useState('Lisa arvuti!');
    const [naitaNuppu, uuendaNuppu] = useState(true);
    function addProduct(){
        setMesssage('Arvuti lisatud!');
        uuendaNuppu(false);
    };

    return ( 
        <div>
            <div>Sõnum: {message}</div>
            <label>Mark</label> <br />
            <input type="text" /> <br />
            <label>Mudel</label> <br />
            <input type="text" /> <br />
            <label>Maksumus</label> <br />
            <input type="number" /> <br />
            {naitaNuppu === true && <button onClick={() => addProduct()}>Sisesta</button>}

        </div>
     );
}

export default LisaArvuti;