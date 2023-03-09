import { useContext } from "react";
import { todoContext } from "./App";

function Table({ todos, handleDelete }) {
    const dispatch = useContext(todoContext);
    return (
        <div>
            <table>
                <caption>TODOS</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>COMPLETED</th>
                        <th>PRIORITY</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => <tr key={todo.id} className={todo.completed ? "bg-green" : "bg-red"}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{String(todo.completed)}</td>
                        <td>{todo.priority}</td>
                        <td><button onClick={() => dispatch({ type: "LOAD_EDIT_FORM", payload: todo.id })}>EDIT</button></td>
                        <td><button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>DELETE</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}
export default Table;