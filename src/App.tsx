// import { useState } from "react";
// import "./App.css";

// function App() {
//   // TypeScript variables with annotations
//   const a: any = "pasupathi";
//   const b: number | string |unknown = 3;
//   const c: boolean = false;
//   const d: string[] = ["a", "b", "c"];
//   const f:[number, string] = [1, "a"];

//   interface Person {
//     name:string
//     age?: number
//   }

//   interface Per extends Person {
//     address:string}

//   const person:Person = {
//     name: "pasupathi",
//     age: 25
//   }

//   const fun:(name:string)=>void | never ;

//   // Using state to demonstrate interactivity
//   const [count, setCount] = useState<number>(0);

//   return (
//     <div className="App">
//       <p>{a}</p>
//       <p>The value of b is: {b}</p>
//       <p>The boolean value is: {c ? "True" : "False"}</p>
//       <p>Array: {d.join(", ")}</p>
//       <p>Counter: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import InputFeilds from "./components/InputFeilds";
import { Todo } from "./mode";
import TodoList from "./components/TodoList";
const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>("");
  const [todso, setTodos] = React.useState<Todo[]>([]);

  const handlAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todso, { id: Math.random(), todo, isDone: false }]);
    setTodo("");
    console.log(todso);
  };

  return (
    <div className="App p-4 flex flex-col gap-4 min-h-screen overflow-y-auto bg-blue-700">
      <h1 className="text-center text-white text-2xl font-semibold">Taskify</h1>
      <InputFeilds todo={todo} setTodo={setTodo} handlAdd={handlAdd} />
      <TodoList todso={todso} setTodos={setTodos} />
    </div>
  );
};

export default App;
