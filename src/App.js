import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

const filters = ["all", "active", "completed"];
function App() {
    const [filter, setFilter] = useState(filters[0]);
    return (
        <DarkModeProvider>
            <Header filters={filters} filter={filter} onFilterChange={setFilter} />
            <TodoList filter={filter} />
        </DarkModeProvider>
    );
}

export default App;
