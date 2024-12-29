import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handlAdd: (e:React.FormEvent) => void;
}
const InputFeilds: React.FC<Props> = ({ todo, setTodo,handlAdd }: Props) => {


    const inputRef=useRef<HTMLInputElement>(null)
  return (
    <form
      action=""
      className="w-full flex justify-center gap-2 h-[60px] relative "
      onSubmit={handlAdd}
      
    >
      <input
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input_box w-full px-4 text-[20px] py-1 rounded-full h-full focus:outline-none "
        ref={inputRef}
      />
      <button type="submit" className="btn text-center  py-1 rounded-full w-[50px] h-[50px] absolute bg-blue-500 text-white  right-[5px] top-[5px] ">
        Go
      </button>
    </form>
  );
};

export default InputFeilds;
