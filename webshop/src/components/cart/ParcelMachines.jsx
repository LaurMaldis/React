import { useEffect, useState } from 'react';

import React from 'react'



  
const ParelMachines = () => {
  
  const [ parcelMachines, setParcelMachines ] = useState([]);


  useEffect(() => {
    fetch('https://www.omniva.ee/locations.json')
    .then(res => res.json())
    .then(json => setParcelMachines(json));
  }, []);

  return (
    <div>
        <select>
             {parcelMachines
            .filter(element => element.A0_NAME === 'EE')
            .map(element => <option key={element.NAME}>{element.NAME}</option>)}
        </select>

    </div>
  )
}

export default ParelMachines