import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';


function List() {

    const [list, setList] = useState([]);
    const [dbList, setDbList] = useState([]);
    const [sortCounter, setSortCounter] = useState(0);
    const [sortLCounter, setSortLCounter] = useState(0);


    useEffect(() => {
      fetch("https://midaiganes.irw.ee/api/list?limit=500")
       .then(res => res.json())
       .then(json => {
        setList(json.list.slice())
        setDbList(json.list.slice())
      });
      
    }, []);

    const calculateBirthDate = (personalCode) => {
      const date = personalCode.substring(5,7);
      const month = personalCode.substring(3,5);
      const yearFirst = personalCode.substring(0,1)
      const yearBeggining = (yearFirst === "3" || yearFirst === "4") ? "19" : "20";
      const year = yearBeggining + personalCode.substring(1,3);
      return date + "." + month + "." + year;
    }

    const sortFirstName = () => {
    setSortLCounter(0);
    if (sortCounter === 0) {
      list.sort((a,b) => a.firstname.localeCompare(b.firstname));
      setList(list.slice());
      setSortCounter(1);
    } else if (sortCounter === 1 ) {
      list.sort((a,b) => b.firstname.localeCompare(a.firstname));
      setList(list.slice());
      setSortCounter(2);
    } else if (sortCounter === 2 ) {
      setList(dbList.slice());
      setSortCounter(0);
    }
  }

  const sortLastName = () => {
    setSortCounter(0);
    if (sortLCounter === 0) {
      list.sort((a,b) => a.surname.localeCompare(b.surname));
      setList(list.slice());
      setSortLCounter(1);
    } else if (sortLCounter === 1 ) {
      list.sort((a,b) => b.surname.localeCompare(a.surname));
      setList(list.slice());
      setSortLCounter(2);
    } else if (sortLCounter === 2 ) {
      setList(dbList.slice());
      setSortLCounter(0);
    }
  }

    return (  
    <div className="tekst">
      <div>
      
      <div className="list">NIMEKIRI</div>
      <table className="tabel">
          <thead >
            <tr>
            <th scope="col" onClick={sortFirstName}>
              Eesnimi 
              {sortCounter === 0 && <FontAwesomeIcon icon={faSort}/>}
              {sortCounter === 1 && <FontAwesomeIcon icon={faSortDown}/>}
              {sortCounter === 2 && <FontAwesomeIcon icon={faSortUp}/>}
              </th>
              <th scope="col" onClick={sortLastName}>Perekonnanimi 
              {sortLCounter === 0 && <FontAwesomeIcon icon={faSort}/>}
              {sortLCounter === 1 && <FontAwesomeIcon icon={faSortDown}/>}
              {sortLCounter === 2 && <FontAwesomeIcon icon={faSortUp}/>} 
              </th>
              <th scope="col">Sugu <FontAwesomeIcon icon={faSort} /></th>
              <th scope="col">Sünnikuupäev</th>
              <th scope="col">Telefon <FontAwesomeIcon icon={faSort} /></th>
            </tr>

        {list.map(element =>
        <tr key={element.id}>
            <td>{element.firstname}</td>
            <td>{element.surname}</td>
            <td>{element.sex === "f" ? "mees" : "naine"}</td>
            <td>{calculateBirthDate(element.personal_code.toString())}</td>
            <td>{element.phone}</td>
        </tr>
        )}
          
        </thead>
        </table>
        </div>
    </div>

        
     );
}

export default List;