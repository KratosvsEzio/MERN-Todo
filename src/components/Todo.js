import React from 'react';
import '../style/todos.css';
import classNames from "classnames";
import PropTypes from 'prop-types';

const Todo = ({ todo, onClick, deleteTodo }) => {

    // ClassName  of Each Todo 
    let todoClassName = (todo) => {
        return classNames(
            'w-full', 'leading-snug', 'rounded-lg', 'my-2', 'p-3', 'text-lg', 'transition-colors', 
            'capitalize', 'cursor-pointer', 'flex', 'justify-between', 'items-center', 'shadow-md', 
            // 'hover:bg-purple-200',
            {
                'bg-purple-400': todo.completed,
                'text-white': todo.completed,
                'bg-gray-200': !todo.completed
            }
        )
    };

    return (
        <li onClick={() => onClick(todo)} key={todo.id}>
            <div className={todoClassName(todo)}>
                <span> {todo.title} </span>
                <span onClick={() => deleteTodo(todo)} className="remove bg-pink-400 hover:bg-pink-500">x</span>
            </div>
        </li>
    )
}

// Default State of todos
Todo.defaultProps = {
    todos: null
}

// State types of todos
Todo.propTypes = {
    todos: PropTypes.array,
    onDbClick: PropTypes.func,
    deleteTodo: PropTypes.func
}

export default Todo
