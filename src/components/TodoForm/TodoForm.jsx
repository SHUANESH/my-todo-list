import { useState ,useEffect , useRef } from "react";
import { VscAdd} from "react-icons/vsc";

const TodoForm = (props) => {
    const [input, setInput] = useState("");
    
    const inputRef = useRef(null);

    useEffect(() => {
    inputRef.current.focus()
    }, [])

    const handleSubmit = (e) =>{
    e.preventDefault();
  
    props.onSubmit({
        id:Math.floor(Math.random()*10000),
        text:input
                                                                                                                                                                            
    })
  setInput("")
}
  return (
    <form className="todo-form" onClick={handleSubmit}>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        placeholder="What do you want to do"
        value={input}
        name="text"
        className="todo-input"
        ref={inputRef}
      />
      <button type="submit" onClick={handleSubmit} className="todo-button">
        <VscAdd/>
      </button>
    </form>
  );
};

export default TodoForm;
