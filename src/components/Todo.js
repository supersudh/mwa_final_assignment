import React, {useState} from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  
  function deleteHandler() {
  //new logic to handle click even on delete button
    setModalIsOpen(true);
  }

  function closeModalHandler(){
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>

        { modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null }
        { modalIsOpen && <Backdrop myCustomClickMethod={closeModalHandler}/> }


    </div>
  );
}

export default Todo;
