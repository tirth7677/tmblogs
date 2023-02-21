import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Tirth");
  const[isPending,setIsPending] = useState(false);
  const history = useHistory();

  const handlesubmit = (e)=>{
    e.preventDefault();
    const blog = {title,body,author}

    setIsPending(true)

    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers:{"content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log("New Blog Added")
      setIsPending(false)
      history.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handlesubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Tirth">Tirth Malli</option>
          <option value="Jatin">Jatin Sharma</option>
          <option value="Debarun">Debarun Deb</option>
          <option value="Kunal">Kunal Sharma</option>
          <option value="Ayush">Ayush Das</option>
          <option value="Anish">Anish Roy</option>
          <option value="Samprit">Samprit Sarkar</option>
        </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
