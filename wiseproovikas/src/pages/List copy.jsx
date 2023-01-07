import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import "../css/List.css"

function List() {

    const [list, setList] = useState([]);
    const [dbList, setDbList] = useState([]);
    const [sortCounter, setSortCounter] = useState(0);
    const [sortLCounter, setSortLCounter] = useState(0);
    const [sortSCounter, setSortSCounter] = useState(0);
    const [sortBCounter, setSortBCounter] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const pages = [];
    for (let number = 1; number <= Math.ceil(dbList.length/10); number++) {
      pages.push(number)
    };
  
    useEffect(() => {
      fetch("https://midaiganes.irw.ee/api/list?limit=500")
       .then(res => res.json())
       .then(json => {
        setList(json.list.slice(0,10))
        setDbList(json.list.slice())
      });
      
    }, []);

    const changePage = (newPage) => {
      setActivePage(newPage);
      setList(dbList.slice(10*(newPage-1),10*newPage));
    };

    const calculateBirthDate = (personalCode) => {
      const date = personalCode.substring(5,7);
      const month = personalCode.substring(3,5);
      const yearFirst = personalCode.substring(0,1)
      const yearBeggining = (yearFirst === "3" || yearFirst === "4") ? "19" : "20";
      const year = yearBeggining + personalCode.substring(1,3);
      const kuupaev = (date + "." + month + "." + year);
      return kuupaev;
    };

    const sortFirstName = () => {
      setSortLCounter(0);
      setSortSCounter(0);
      setSortBCounter(0);
    if (sortCounter === 0) {
      list.sort((a,b) => a.firstname.localeCompare(b.firstname));
      setList(list.slice());
      setSortCounter(1);
    } else if (sortCounter === 1 ) {
      list.sort((a,b) => b.firstname.localeCompare(a.firstname));
      setList(list.slice());
      setSortCounter(2);
    } else if (sortCounter === 2 ) {
      setList(dbList.slice(0,10));
      setSortCounter(0);
      setActivePage(activePage)
    }
  };

  const sortLastName = () => {
    setSortCounter(0);
    setSortSCounter(0);
    setSortBCounter(0);
    if (sortLCounter === 0) {
      list.sort((a,b) => a.surname.localeCompare(b.surname));
      setList(list.slice());
      setSortLCounter(1);
    } else if (sortLCounter === 1 ) {
      list.sort((a,b) => b.surname.localeCompare(a.surname));
      setList(list.slice());
      setSortLCounter(2);
    } else if (sortLCounter === 2 ) {
      setList(dbList.slice(0,10));
      setSortLCounter(0);
    }
  };

  const sortSex = () => {
    setSortCounter(0);
    setSortLCounter(0);
    setSortBCounter(0);
    if (sortSCounter === 0) {
      list.sort((a,b) => a.sex.localeCompare(b.sex));
      setList(list.slice());
      setSortSCounter(1);
    } else if (sortSCounter === 1 ) {
      list.sort((a,b) => b.sex.localeCompare(a.sex));
      setList(list.slice());
      setSortSCounter(2);
    } else if (sortSCounter === 2 ) {
      setList(dbList.slice(0,10));
      setSortSCounter(0);
    }
  };

  const sortBirthday = (personalCode) => {
    setSortCounter(0);
    setSortLCounter(0);
    setSortSCounter(0);
    const date = personalCode.substring(5,7);
    const month = personalCode.substring(3,5);
    const yearFirst = personalCode.substring(0,1)
    const yearBeggining = (yearFirst === "3" || yearFirst === "4") ? "19" : "20";
    const year = yearBeggining + personalCode.substring(1,3);
    const kuupaev = new Date(date + "." + month + "." + year).toLocaleDateString();
    alert(kuupaev);
    if (sortBCounter === 0) {
      list.sort((a,b) => 
      a.kuupaev.localeCompare(b.kuupaev));
      setList(list.slice());
      setSortBCounter(1);
    } else if (sortBCounter === 1 ) {
      list.sort((a,b) => b.kuupaev.localeCompare(a.kuupaev));
      setList(list.slice());
      setSortBCounter(2);
    } else if (sortBCounter === 2 ) {
      setList(dbList.slice(0,10));
      setSortBCounter(0);
    }
  };

  const prevPage = (newPage) => {
    setActivePage(activePage - 1);
    setList(dbList.slice(10*(newPage-1),10*newPage));
  }

  const nextPage = (newPage) => {
    setActivePage(activePage + 1);
    setList(dbList.slice(10*(newPage-1),10*newPage));
  }

  return (  
    <div>
      <div className="pealkiri">NIMEKIRI</div>
      <table className="tabel">
        <thead>
          <tr className="ylemine-rida">
            <th className="clickable" scope="col" onClick={sortFirstName}>
              Eesnimi 
              {sortCounter === 0 && <FontAwesomeIcon icon={faSort}/>}
              {sortCounter === 1 && <FontAwesomeIcon icon={faSortDown}/>}
              {sortCounter === 2 && <FontAwesomeIcon icon={faSortUp}/>}
            </th>
              <th className="clickable" scope="col" onClick={sortLastName}>Perekonnanimi 
              {sortLCounter === 0 && <FontAwesomeIcon icon={faSort}/>}
              {sortLCounter === 1 && <FontAwesomeIcon icon={faSortDown}/>}
              {sortLCounter === 2 && <FontAwesomeIcon icon={faSortUp}/>} 
            </th>
              <th className="clickable" scope="col" onClick={sortSex}> Sugu
              {sortSCounter === 0 && <FontAwesomeIcon icon={faSort}/>}
              {sortSCounter === 1 && <FontAwesomeIcon icon={faSortDown}/>}
              {sortSCounter === 2 && <FontAwesomeIcon icon={faSortUp}/>}              
            </th>
              <th className="clickable" scope="col" onClick={sortBirthday}>Sünnikuupäev
              {sortBCounter === 0 && <FontAwesomeIcon icon={faSort}/>}
              {sortBCounter === 1 && <FontAwesomeIcon icon={faSortDown}/>}
              {sortBCounter === 2 && <FontAwesomeIcon icon={faSortUp}/>} 
            </th>
            <th scope="col">Telefon</th>
          </tr>
          {list.map(element =>
          <tr className="isik" key={element.id}>
              <td>{element.firstname}</td>
              <td>{element.surname}</td>
              <td>{element.sex === "f" ? "naine" : "mees"}</td>
              <td>{calculateBirthDate(element.personal_code.toString())}</td>
              <td>{element.phone}</td>
          </tr>
          )}
            
        </thead>
      </table>
      <div>
      { activePage > 1 && <div className="buttons" onClick={() => prevPage(activePage-1)}>Previous</div>}
      {pages.map(number => 
      <div className="buttons" key={number} onClick={() => changePage(number)} active={number === activePage}>
        {number}</div>
        )}
      </div>
      { activePage < 4 && <div className="buttons" onClick={() => nextPage(activePage+1)}>Next</div> }
    </div>
  );
}

export default List;