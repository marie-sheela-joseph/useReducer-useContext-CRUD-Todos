import { useReducer, createContext } from "react";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import Table from "./Table";
import "./App.css";

export const todoContext = createContext(null);
const initialState = {
  todos: [{ id: 1, title: "read a book", completed: false, priority: "one" },
  { id: 2, title: "buy eggs", completed: true, priority: "two" },
  { id: 3, title: "hit the gym", completed: false, priority: "three" }], formData: { title: "", completed: false, priority: "one" }, showEditForm: false, editId: 0
}
const reducer = function (state, action) {
  switch (action.type) {
    case "ADD_TODO": return { ...state, todos: [...state.todos, { ...action.payload, id: state.todos.length === 0 ? 1 : state.todos.slice(-1)[0].id + 1 }] }

    case "DELETE_TODO": return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) }

    case "LOAD_EDIT_FORM": return { ...state, editId: action.payload, showEditForm: true }

    case "EDIT_TODO": return { ...state, showEditForm: false, todos: state.todos.map((todo) => todo.id === state.editId ? action.payload : todo) }

    default: return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <section>
      <div>
        <h1 className="center">useReducer + useContext - Create, Read, Update, Delete Todos </h1>
        <todoContext.Provider value={dispatch}>
          <AddForm />
          {state.showEditForm && <EditForm todo={state.todos.find((todo) => todo.id === state.editId)} />}
          <Table todos={state.todos} />
        </todoContext.Provider>
      </div>
    </section>
  );
}
export default App;
