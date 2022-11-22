function VaataArvuti () {
    const margid = localStorage.getItem('margid');
    const mudel = localStorage.getItem('mudel');
    const maskumus = localStorage.getItem('maskumus');


    return ( 
        <div>
            <div>{margid}</div>
            <div>{mudel}</div>
            <div>{maskumus}</div>
        </div>
     );
}

export default VaataArvuti;