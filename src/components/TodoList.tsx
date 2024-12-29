import React from 'react'
import { Todo } from '../mode';
import SingleTodo from './SingleTodo';

interface Props {  
    todso:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
 }

const TodoList:React.FC<Props   > = ({todso,setTodos}:Props) => {
    console.log(todso);
    
  return (
    <div className='text-white flex flex-col gap-2'>
        {
            todso.map((todo,index) => (

                <SingleTodo key={index} todo={todo} todso={todso} setTodos={setTodos}/>

            ))
        }
      
    </div>
  )
}

export default TodoList
