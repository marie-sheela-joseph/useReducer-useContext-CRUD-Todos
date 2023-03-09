import { useState, useContext } from "react";
import { todoContext } from "./App";

function AddForm() {
    const [state, setState] = useState({ todo: { title: "", completed: false, priority: "one" } });
    const dispatch = useContext(todoContext);
    const handleSubmit = function (e) {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", payload: state.todo })
    }
    const clearForm = function () {
        setState((prevState) => { return { ...prevState, todo: { title: "", completed: false, priority: "one" } } })
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2 className="center">ADD TODO</h2>
                <div>
                    <label htmlFor="title">TITLE</label>
                    <input
                        type={"text"}
                        name="title"
                        id="title"
                        value={state.todo.title}
                        required
                        onChange={(e) => setState((prevState) => { return { ...prevState, todo: { ...prevState.todo, [e.target.name]: e.target.value } } })}
                    />
                </div>
                <div>
                    <label htmlFor="completed">COMPLETED</label>
                    <input
                        type={"checkbox"}
                        name="completed"
                        id="completed"
                        value={state.todo.completed}
                        onChange={(e) => setState((prevState) => { return { ...prevState, todo: { ...prevState.todo, [e.target.name]: !prevState.todo.completed } } })}
                    />
                </div>
                <div>
                    <label htmlFor="priority">PRIORITY</label>
                    <select
                        name="priority"
                        id="priority"
                        value={state.todo.priority}
                        onChange={(e) => setState((prevState) => { return { ...prevState, todo: { ...prevState.todo, [e.target.name]: e.target.value } } })}>
                        <option value={"one"}>1</option>
                        <option value={"two"}>2</option>
                        <option value={"three"}>3</option>
                    </select>
                </div>
                <button type="submit">ADD</button>
                <button type="reset" onClick={clearForm}>RESET</button>
            </form>
        </div>
    );
}
export default AddForm;