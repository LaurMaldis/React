import {useRef, useState} from 'react'; 

function LisaArvuti () {
    const [message, setMesssage] = useState('Lisa arvuti!');
    const markRef = useRef();
    const mudelRef = useRef();
    const maskumusRef = useRef();

    function addProduct() {
        
        let margid = localStorage.getItem('margid');
        margid = JSON.parse(margid) || [];
        margid.push(markRef.current.value);
        margid = JSON.stringify(margid);
        localStorage.setItem('margid', margid);

        let mudelid = localStorage.getItem('mudelid');
        mudelid = JSON.parse(mudelid) || [];
        mudelid.push(mudelRef.current.value);
        mudelid = JSON.stringify(mudelid);
        localStorage.setItem('mudelid', mudelid);

        let maskumus = localStorage.getItem('maskumus');
        maskumus = JSON.parse(maskumus) || [];
        maskumus.push(maskumusRef.current.value);
        maskumus = JSON.stringify(maskumus);
        localStorage.setItem('maskumus', maskumus);
        
        setMesssage('Arvuti lisatud!');
    };

    return ( 
        <div>
            <div>Sõnum: {message}</div>
            <label>Mark</label> <br />
            <input ref={markRef} type="text" /> <br />
            <label>Mudel</label> <br />
            <input ref={mudelRef} type="text" /> <br />
            <label>Maksumus</label> <br />
            <input ref={maskumusRef} type="number" /> <br />
           { message === 'Lisa arvuti!' && <button onClick={() => addProduct()}>Sisesta</button>}

        </div>
     );
}

export default LisaArvuti;