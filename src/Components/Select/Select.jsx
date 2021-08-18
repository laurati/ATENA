import React, { useState } from 'react';
import "./Select.css";

const Select = ({setValue}) => {

    //const [value, setValue] = useState("select");

    //console.log(value)

    let options =  [ 
        {name: 'Selecione',
        value: 'select',},

        {name: 'Temperatura',
        value: 'temperatura',},

        {name: 'Umidade',
        value: 'umidade',},

        {name: 'Precipitação',
        value: 'precipitacao',},];
    

    function onChangeFunc(event) {
        setValue(event.target.value)
      }


  return (
    <>
      <div className="div-select">
    
        <select onChange={onChangeFunc}  >
        {options.map(item => (
        <option key={item.value} value={item.value}>{item.name}</option>))}
          
          
        </select>
        
      </div>
      
    </>
  );
};

/*<option selected value="select">Selecione</option>     
<option value="temperatura">Temperatura</option>     
<option value='umidade'>Umidade</option>     
<option value="precipitacao">Precipitação</option>*/

export default Select;

