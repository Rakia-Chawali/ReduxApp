import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
export const Addtask = ({editForm}) => {
  const dispatch = useDispatch();
  const[todoValue, setTodoValue]= useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    let date= new Date();
    let time = date.getTime();
    const toDoobj ={
        id: '',
        todo: todoValue,
        completed: false
    }
    setTodoValue('');
    dispatch(addTodo(toDoobj))
  }
    return (
      <>
      {editForm===false?(
 <form className="form-group custom-form" onSubmit={handleSubmit}>
          <label>Add your todo-items</label>
          <div className="input-and-button">
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setTodoValue(e.target.value)}
              value={todoValue}
            />
            <button color="violet" appearance="primary"n
              type="submit" className="btn btn-secondary btn-md"> ADD
            </button>
          </div>
        </form>
      ): (
       <div className="form">
        <form className="form-group custom-form" >
          <label>Update your todo-items</label>
          <div className="input-and-button">
            <input
              type="text"
              className="form-control"
              required
             
            />
            <button color="violet" appearance="primary"n
              type="submit" className="btn btn-secondary btn-md"> Update
            </button>
          </div>
        </form>
      </div>
      )}
        </>     
    );
  }

