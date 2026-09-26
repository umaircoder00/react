// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import { addTodo, updateTodo ,deleteTodo} from "./features/todo/todoSlices.js";

// const App = () => {
//   const [input, setInput] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [editTodo, setEditTodo] = useState(null)


//   const dispatch = useDispatch()

//   let todoss = useSelector((state) => state.todo.todos)

//   console.log(todoss)

//   const toastHandler = (message) => {
//     return toast(message);
//   };


//   const updateTodoHandler = () => {
//     dispatch(updateTodo({
//       id : editTodo,
//       title : input
//     }))
//      setInput("")
//       setEditTodo(null)
//   }
// }
 
//   const addTodoHandler = () => {
//     if (!input.trim()) {
//       return toastHandler("Please Enter a Task");
//     }
//     dispatch(addTodo({

//       id: new Date().getTime(),
//       title: input
//     }))

//      toastHandler("Task added");
//      setInput("")


//     // if (todos) {
//     //   const existingTodo = todos.map((item) => item.title.includes(input));
//     //   console.log(existingTodo);

//     //   if (existingTodo[0]) {
//     //     return toastHandler("this is item already in list")
//     //   }

//     // }

//     // if (editTodo) {
//     //   const updateTodos = todos.map((todo) => todo.id == editTodo ? { ...todo, title: input } : todo)

//     //   setTodos(updateTodos)
//     //   setEditTodo(null)
//     //   setInput("")
//     //   // console.log(updateTodos);
//     //   return toastHandler("item added")
//     // }

//     if(editTodo !== null){
//       return updateTodoHandler()
     
//  setInput("");
//       // const todoItem = {
//       //   title: input,
//       //   id: Date.now(),
//       // };
//     // setTodos((prev) => [...prev, todoItem]);
//   };

//   // const editTodoHandler = (todo ) => {

//   //   let editItem = todos.find((item) => item.id == id)
//   //   setEditTodo(todo.id)
//   //   setInput(todo.title)
    
    
//   //   // console.log(id);
//   // }
  

//   const deleteTodoHandler = (id) => {
//     dispatch(deleteTodo(id))
   

//   }

//   console.log("todos array -->", todos);

//   return (
//     <div className="h-screen flex justify-center items-center bg-[#0f172a]">
//       <div className="shadow-md rounded-2xl w-[450px] p-4 bg-[#1e293b]">
//         {/* title */}
//         <h1 className="text-2xl font-bold text-white">Todo Application</h1>

//         {/* input area */}
//         <div className="w-full  h-[45px] flex justify-between gap-3 mb-3 mt-3">
//           <input
//             type="text"
//             placeholder="add your task"
//             className="bg-[#0f172a] rounded-2xl text-white pl-3 w-[80%] h-[45px] outline-blue-600"
//             onChange={(e) => setInput(e.target.value)}
//             value={input}
//           />

//           <button
//             onClick={addTodoHandler}
//             className="cursor-pointer w-[100px] text-white bg-blue-600 rounded-2xl"
//           >
//             {editTodo ? "Update" : "Add"}
//           </button>
//         </div>

//         {/* todos  */}
//         <div>
//           {todos.length > 0 ? (
//             todos.map((todo) =>
//               <TodoItem
//                 deleteTodoHandler={deleteTodoHandler}
//                 editTodoHandler={editTodoHandler}
//                 key={todo.id} todo={todo} />)
//           ) : (
//             <p className="text-white text-center">No Todos</p>
//           )}
//         </div>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default App;

// const TodoItem = ({ todo, editTodoHandler, deleteTodoHandler }) => {
//   return (
//     <div className="flex justify-between p-4 mb-3 bg-[#0f172a] rounded-2xl">
//       <h1 className="text-white">{todo.title}</h1>
//       <div className="flex gap-4 text-white">
//         <button className="text-green-400 cursor-pointer" onClick={() => editTodoHandler(todo.id)}>Edit</button>
//         <button className="text-red-400 cursor-pointer" onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
//       </div>
//     </div>
//   );
// };



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addTodo, updateTodo, deleteTodo } from "./features/todo/todoSlices.js"; 

const App = () => {
  const [input, setInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  const dispatch = useDispatch();

 
  const todoss = useSelector((state) => state.todo.todos);

  const toastHandler = (message) => {
    return toast(message);
  };

  const updateTodoHandler = () => {
    dispatch(
      updateTodo({
        id: editTodo,
        title: input,
      })
    );
    setInput("");
    setEditTodo(null);
    toastHandler("Task updated");
  }; 

  const addTodoHandler = () => {
    if (!input.trim()) {
      return toastHandler("Please Enter a Task");
    }

   
    if (editTodo !== null) {
      updateTodoHandler();
      return;
    }

    // Naya todo add karne ke liye
    dispatch(
      addTodo({
        id: new Date().getTime(),
        title: input,
      })
    );

    toastHandler("Task added");
    setInput("");
  };

 
  const editTodoHandler = (todo) => {
    setEditTodo(todo.id);
    setInput(todo.title);
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
    toastHandler("Task deleted");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#0f172a]">
      <div className="shadow-md rounded-2xl w-[450px] p-4 bg-[#1e293b]">
        {/* title */}
        <h1 className="text-2xl font-bold text-white">Todo Application</h1>

        {/* input area */}
        <div className="w-full h-[45px] flex justify-between gap-3 mb-3 mt-3">
          <input
            type="text"
            placeholder="add your task"
            className="bg-[#0f172a] rounded-2xl text-white pl-3 w-[80%] h-[45px] outline-blue-600"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />

          <button
            onClick={addTodoHandler}
            className="cursor-pointer w-[100px] text-white bg-blue-600 rounded-2xl"
          >
            {editTodo ? "Update" : "Add"}
          </button>
        </div>

       
        <div>
          {todoss && todoss.length > 0 ? (
            todoss.map((todo) => (
              <TodoItem
                deleteTodoHandler={deleteTodoHandler}
                editTodoHandler={editTodoHandler}
                key={todo.id}
                todo={todo}
              />
            ))
          ) : (
            <p className="text-white text-center">No Todos</p>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;

const TodoItem = ({ todo, editTodoHandler, deleteTodoHandler }) => {
  return (
    <div className="flex justify-between p-4 mb-3 bg-[#0f172a] rounded-2xl">
      <h1 className="text-white">{todo.title}</h1>
      <div className="flex gap-4 text-white">
       
        <button
          className="text-green-400 cursor-pointer"
          onClick={() => editTodoHandler(todo)}
        >
          Edit
        </button>
        <button
          className="text-red-400 cursor-pointer"
          onClick={() => deleteTodoHandler(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
