import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, settodos] = useState([]);
  const [email, setemail] = useState("");
  const [comment, setcomment] = useState("");

  useEffect(() => {
    let savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      settodos(JSON.parse(savedTodos));
    }
  }, []);

  const onSubmit = () => {
    if (email.trim() && comment.trim()) {
      const newTodo = { email, comment };
      settodos([...todos, newTodo]);
      setemail("");
      setcomment("");
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    }
  };

  return (
    <>
      <div className=" bg-yellow-100 min-h-screen">
        <h1 className="text-center font-bold text-4xl border bg-slate-700 text-white py-3">Comment Box</h1>
        <div className="fixed overflow-x-auto max-h-[57vh] mx-10">
          {todos.map((todo, index) => (
            <ol key={index}>
              <li className="font-bold text-xl items-center ">
                <lord-icon
                  src="https://cdn.lordicon.com/kthelypq.json"
                  trigger="hover"
                  style={{"width":"35px", "height":"35px","paddingTop":"10px", "marginRight":"8px"}}

                ></lord-icon>
                {todo.email}
              </li>
              <li className="p-2 bg-slate-200 rounded-3xl mr-20 ml-10">{todo.comment}</li>
            </ol>
          ))}
        </div>

        <div className="flex-col justify-between text-center fixed w-[99.5%] bottom-0 mx-2">
          <input
            className="border border-blue-800 rounded-2xl h-12 w-[95%] m-1 px-2"
            value={email}
            placeholder="Enter your Email"
            type="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <textarea
            className="border border-blue-800 rounded-2xl h-36 w-[95%] text-wrap m-2 px-2"
            value={comment}
            placeholder="Enter Comment"
            type="text"
            onChange={(e) => setcomment(e.target.value)}
          ></textarea>
          <button
            className="bg-green-500 rounded-full
          px-4 py-2 border border-green-900
          mb-4 text-xl"
            onClick={onSubmit}
          >
            Submit Comment
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
