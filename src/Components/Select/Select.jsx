import React, { useEffect,useState } from 'react';
import { useForm } from "react-hook-form";
import "./Select.css";

const Select = () => {
    
    //const [valor, setValor] = useState("");


  return (
    <>
      <div class="div-select">
    
        <select>
          <option selected value="selecione" >Selecione</option>     
          <option value="temperatura">Temperatura</option>     
          <option value='umidade'>Umidade</option>     
          <option value="precipitacao">Precipitação</option>
        </select>
         
      </div>
      
    </>
  );
};

export default Select;
