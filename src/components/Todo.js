import React from 'react';
import '../style/todos.css';
import classNames from "classnames";
import PropTypes from 'prop-types';

const Todo = ({ todo, onDbClick, deleteTodo }) => {

    // ClassName  of Each Todo 
    let todoClassName = (todo) => {
        return classNames(
            'w-full', 'leading-snug', 'rounded-lg', 'my-2', 'p-3', 'text-lg', 'capitalize', 'cursor-pointer', 'flex', 'justify-between', 'items-center', 'hover:bg-purple-200',
            {
                'bg-green-200': todo.completed,
                'bg-gray-200': !todo.completed
            }
        )
    };

    return (
        <li onDoubleClick={() => onDbClick(todo)} key={todo.id}>
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
