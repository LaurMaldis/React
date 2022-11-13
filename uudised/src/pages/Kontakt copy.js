import { useState } from 'react';

function Kontakt() {
         const [ aadress, maaraAadress ] = useState('Tallinn');
         const [ telefon, maaraTelefon ] = useState('56565656');
         const [ email, maaraEmail ] = useState('bla@baa.com');
         const [ ingliseKeelne, paneInglise ] = useState(false);
         const [message, setMessage ] = useState ('');
        
         function maaraBla(){
             maaraAadress('Karva 5');
             maaraTelefon('59599999');
             maaraEmail('karvapall@eeesti.ru');
             setMessage('Leht on inglise keelne!');
             paneInglise(true);

        }

    return ( <div>
        { <div>{aadress}</div> }
        { <div>{telefon}</div> }
        { <div>{email}</div> }


        { { ingliseKeelne === false && <button onClick={() => maaraBla()}>Muuda inglise keelseks</button> } };
        { <div>{message}</div> }
       
       
         { <br /> }



        <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
        <div>Võta meiega ühendust</div>
        <br />
        <div>Kristiine keskus</div>
        <div>+412341235</div>
        <div>Endla 45</div>
        <br />
        <div>Ülemiste keskus</div>
        <div>+5252532</div>
        <div>Suur-Sõjamäe 4</div>
        <br />
        <div>Tasku keskus</div>
        <div>+213213213</div>
        <div>Turu 2</div>
    </div> );
}

export default Kontakt;