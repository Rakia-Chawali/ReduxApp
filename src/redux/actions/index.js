export const Add_Todo= 'Add_Todo';
export const delete_All = 'Delete_All';
export const remove_Todo= 'Remove_Todo';
export const addTodo=(payload)=>{
    return{
        type: 'Add_Todo',
        payload
    }
}

export const deleteAll = () =>{
    return{
        type: delete_All
    }
}
export const removeTodo =(payload)=>{
    return {
      type: 'Remove_Todo',
      payload
    }
}