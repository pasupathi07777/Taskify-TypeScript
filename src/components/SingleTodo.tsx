import React, { useEffect, useRef } from "react";
import { Todo } from "../mode";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todso: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todso, setTodos }: Props) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editTodo, setEditTodo] = React.useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todso.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todso.filter((todo) => todo.id !== id));
  };
  const handleSave = () => {
  setTodos((pre)=>pre.map((tod)=>tod.id===todo.id?{...tod,todo:editTodo}:tod))
    setEdit(false)
  };

  const inputRef =useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit]);

  return (
    <div className="flex justify-between gap-2 bg-yellow-400 px-2 py-2 h-[60px] rounded-full items-center text-black text-[20px] ">
      {edit ? (
        <input 
          type="text"
          className="input_box w-full px-4 text-[20px] py-1 rounded-full h-full focus:outline-none "
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={inputRef}
        />
      ) : (
        <p className={`${todo.isDone ? "line-through" : ""}`}>{todo.todo}</p>
      )}
    {
        edit ?
        <button className=" bg-green-600 px-2  rounded-full h-full text-white" onClick={handleSave}>Save</button>:
        <div className="icons flex gap-2">
        <div
          className=""
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <CiEdit />
        </div>
        <div className="" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </div>
        <div className="" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </div>
      </div>
    }
    
    </div>
  );
};

export default SingleTodo;
