import { useState, useContext } from "react";
import { todoContext } from "./App";

function EditForm({ todo }) {
    const [state, setState] = useState({ todo: todo });
    const dispatch = useContext(todoContext);
    const handleSubmit = function (e) {
        e.preventDefault();
        dispatch({ type: "EDIT_TODO", payload: state.todo })
    }
    return (

        < div >
            {console.log(todo)}
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2 className="center">EDIT TODO</h2>
                <div>
                    <label htmlFor="title">TITLE</label>
                    <input
                        type={"text"}
                        name="title"
                        id="title"
                        value={state.todo.title}
                        onChange={(e) => setState((prevState) => { return { ...prevState, todo: { ...prevState.todo, [e.target.name]: e.target.value } } })} />
                </div>
                <div>
                    <label htmlFor="completed">COMPLETED</label>
                    <input
                        type={"checkbox"}
                        name="completed"
                        id="completed"
                        value={state.todo.completed}
                        checked={state.todo.completed}
                        onChange={(e) => setState((prevState) => { return { ...prevState, todo: { ...prevState.todo, [e.target.name]: !prevState.todo.completed } } })} />
                </div>
                <div>
                    <label htmlFor="priority">PRIORITY</label>
                    <select
                        name="priority"
                        value={state.todo.priority}
                        id="priority"
                        onChange={(e) => setState((prevState) => { return { ...prevState, todo: { ...prevState.todo, [e.target.name]: e.target.value } } })}>
                        <option value={"one"}>1</option>
                        <option value={"two"}>2</option>
                        <option value={"three"}>3</option>
                    </select>
                </div>
                <button type="submit">UPDATE</button>
            </form>
        </div >
    );
}
export default EditForm;