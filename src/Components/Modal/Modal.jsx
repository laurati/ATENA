import * as React from "react";
import NavBarra from '../NavBar/navbar'
import "./Modal.css"

const Modal = () => {

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  return (
    
    <>
  <NavBarra/>
  <button className="open-button" onClick={openForm}>Open Form</button>
  <div className="form-popup" id="myForm">

  <form action="/action_page.php" className="form-container">
    <h1>Login</h1>
    <button type="button" class="btn cancel" onClick={closeForm}>Close</button>

  </form>

  </div>
    </>
  );
};

export default Modal;
