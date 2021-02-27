import React from "react";
import "../style/todos.css";
import PropTypes from "prop-types";
import Todo from "./Todo";

const Todos = ({ todos, onDbClick, deleteTodo }) => {
    
    let todoList = todos.map((todo) => (
        <Todo key={todo._id} todo={todo} onDbClick={onDbClick} deleteTodo={deleteTodo} />
    ));

    return (
        <div className="container mx-auto text-gray-700">
            <h3 className="font-extrabold my-5 text-2xl">Todo List</h3>
            <ul>
                {todoList}
            </ul>
        </div>
    )
}

// Default State of todos
Todos.defaultProps = {
    todos: []
}

// State types of todos
Todos.propTypes = {
    todos: PropTypes.array,
    onDbClick: PropTypes.func,
    deleteTodo: PropTypes.func
}

export default Todos
