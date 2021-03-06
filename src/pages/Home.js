import React from 'react';
import { useState, useEffect } from 'react';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';
import Legends from '../components/Legends';
import FilterTodos from '../components/FilterTodos';

const Home = () => {

    const apiUrl = 'https://aashir-react-todo-list-backend.herokuapp.com/api/todos';
    // const apiUrl = 'http://localhost:7000/api/todos';

    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("200");

    // When ever out page loads 
    useEffect(() => {
        const getTodos = async () => {
            const TodosFromServer = await fetchTodos();
            setTodos(TodosFromServer);
        };

        getTodos();
    }, [])

    // Fetch todos from server
    const fetchTodos = async () => {
        const res = await fetch(apiUrl, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await res.json();

        // console.log('todos', data.data);
        return data.data;
    }

    // Todo Delete Button event Handler / Delete Todo Task
    const deleteTodo = async (myTodo) => {
        const res = await fetch(apiUrl + `/${myTodo._id}`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            method: "DELETE",
            mode: "cors",
        });
        const data = await res.json();

        const newTodos = todos.filter( todo => todo._id !== data.data._id );
        setTodos(newTodos);
    };

    // Todo Double Click event Handler / Toggle Complete State of Todo Task
    const onClick = async (myTodo) => {
        const todo = {
            title: myTodo.title,
            completed: !myTodo.completed
        };

        console.log('update', todo);

        const res = await fetch(apiUrl + `/${myTodo._id}`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify({
                title: myTodo.title,
                completed: !myTodo.completed
            })

        });
        const data = await res.json();
        const newTodos = todos.map( (t) => {
            if(t._id === data.data._id) {
                console.log('update', data.data);
                return data.data;
            }
            return t;
        });

        setTodos(newTodos);
    };

    // Todo Add event Handler / Create New Todo Task
    const addTodo = async (myTodo) => {
        const todo = {
            title: myTodo,
            completed: false
        }
        
        const res = await fetch(apiUrl, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            mode: "cors",
            body: JSON.stringify(todo)
        });
        console.log('todo', res);
        const data = await res.json();
        // console.log('todos', data);
        setTodos([data.data, ...todos]);
    };

    // Todos Filter event Handler
    const FilterTodosList = (filter) => {
        setFilter(filter);
    };


    return (
        <div>
            <AddTodo addTodo={addTodo}/>
            <FilterTodos FilterTodosList={FilterTodosList} />
            <Legends />
            <Todos todos={todos.slice(0, filter)} onDbClick={onClick} deleteTodo={deleteTodo} />
        </div>
    )
}

export default Home
