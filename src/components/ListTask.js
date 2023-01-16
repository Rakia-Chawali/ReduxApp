import React  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { removeTodo } from '../redux/actions';



export const ListTask = ({handleEditClick, editForm}) => {
  const dispatch= useDispatch();
  const ListTask = useSelector((state)=>state.operationsReducer);
  
    return ListTask.map((todo)=>(
      
<div key={todo.id} className='todo-box'>
<div className=' content'> <input type="checkbox" checked ={todo.completed}>
 </input> 
 
<p style={todo.completed===true?{textDecoration:'line-through'}: {textDecoration:'none'}}>{todo.todo}</p>
</div>
<div className='actions-box'>
<span onClick={()=>handleEditClick()}><Icon icon={edit2} /></span>
<span onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={trash}/></span>
</div>
</div>
))
    }

