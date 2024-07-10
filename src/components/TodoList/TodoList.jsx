import React, { useState, useRef, useEffect } from "react";
import AddTodo from "../AddTodo/AddTodo.jsx";
import Todo from "../Todo/Todo.jsx";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState(readTodosFromLocalStorage);

    const listEndRef = useRef(null);

    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    };

    const handleUpdate = (updated) => {
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    };

    const handleDelete = (deleted) => {
        setTodos(todos.filter((t) => t.id !== deleted.id));
    };

    const scrollToBottom = () => {
        if (listEndRef.current) {
            listEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        scrollToBottom();
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const filtered = getFilteredItems(todos, filter);

    return (
        <section className={styles.todoList}>
            <ul>
                {filtered.map((item) => (
                    <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))}
                <div ref={listEndRef} />
            </ul>
            <AddTodo onAdd={handleAdd} />
        </section>
    );
}

function readTodosFromLocalStorage() {
    console.log(readTodosFromLocalStorage);
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
    if (filter === "all") {
        return todos;
    }
    return todos.filter((todo) => todo.status === filter);
}
