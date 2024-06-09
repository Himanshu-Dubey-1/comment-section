import { useState } from "react";
import "./App.css";

function App() {
  const [values, setvalues] = useState([]);
  const [comment, setComment] = useState("");
  const [users, setusers] = useState([]);
  const [name, setName] = useState("");

  const commentText = (e) => {
    setComment(e.target.value);
  };

  const addComment = () => {
    if (name == "" || comment == "") {
      alert("Please Enter The Correct Details");
    } else {
      setvalues([...values, comment]);
      setusers([...users, name]);
      setComment("");
      setName("");
    }
  };

  const commentName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="input-field">
          <input
            className="email-box"
            type="email"
            value={name}
            placeholder="Enter your Email-Id"
            onChange={commentName}
          />
          <br />
          <textarea
            className="comment-box"
            type="text"
            value={comment}
            placeholder="Comment"
            onChange={commentText}
          ></textarea>
          <br />
          <button onClick={addComment} className="btn">
            Submit Comment
          </button>
        </div>
        <div className="comments">
          <h1>Comment Box</h1>
          <hr />
          <ul className="lists">
            {values.map((value, index) => (
              <li key={index}>
                <h2 className="users-email">
                  <b>{users[index]}</b>
                </h2>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
