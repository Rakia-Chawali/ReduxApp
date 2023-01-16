import { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import {Addtask} from "./components/Addtask";
import {ListTask} from "./components/ListTask"
import { useDispatch, useSelector } from "react-redux";
import {deleteAll} from './redux/actions';
import { translateDOMPositionXY } from "rsuite/esm/DOMHelper";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.operationsReducer);
  const [editForm, setEditForm]= useState(false);
  const handleEditClick = ()=>{
    setEditForm(true);
  }
  return (
    <div className="App">
      <nav>
        <img src="./logo.png" alt="logo" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Vlog</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Fashion</a>
          </li>
        </ul>
      </nav>
      <div className="container">
        <h1 className="text-center">ToDo List App</h1>

        <Addtask editForm={editForm} />
        <ListTask handleEditClick={handleEditClick} editForm={editForm} />
        {todos.length > 1 && (
          <button
            className="btn btn-danger delete-all"
            onClick={() => dispatch(deleteAll())}
          >
            Delete All
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
