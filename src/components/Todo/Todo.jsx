import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
    const { text, status } = todo;

    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({ ...todo, status });
    };

    const handleDelete = () => {
        onDelete(todo);
    };

    return (
        <li className={styles.todoItem}>
            <label className={styles.customCheckbox}>
                <input
                    type="checkbox"
                    id={`checkbox-${todo.id}`}
                    checked={status === 'completed'}
                    onChange={handleChange}
                />
                <span className={styles.checkmark}></span>
            </label>
            <label htmlFor={`checkbox-${todo.id}`} className={styles.todoText}>{text}</label>
            <button onClick={handleDelete}>
                <FaRegTrashAlt />
            </button>
        </li>
    );
}