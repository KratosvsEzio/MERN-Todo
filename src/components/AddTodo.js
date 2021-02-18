import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({addTodo}) => {

    // State title
    const [title, setTitle] = useState('');

    // onChange Event handler of title input
    const changeTitle = (title) => {
        setTitle(title);
    };

    // onSubmit Event handler of form
    const onAdd = (e) => {
        e.preventDefault();
        setTitle('');
        if(title !== '') {
            addTodo(title);
        }
    }

    return (
        <div>
            <div className="container mx-auto">
                <h3 className="font-extrabold my-5 text-2xl text-gray-700">Add Todo</h3>
                <form className="flex" onSubmit={(e) => onAdd(e)}>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => changeTitle(e.target.value)}
                        placeholder="Add todo..." 
                        style={{flex: '1 1 83.33%'}}
                        className="focus:outline-none focus:border-purple-900 border border-purple-400 p-2.5"
                    />
                    <input 
                        style={{flex: '1 1 16.66%'}}
                        className="bg-purple-900 text-white border border-purple-900 cursor-pointer" 
                        type="submit" 
                        value="Add" 
                    />
                </form>
            </div>
        </div>
    )
}

// Default State of todos
AddTodo.defaultProps = {
    
}

// State types of todos
AddTodo.propTypes = {
    addTodo: PropTypes.func
}

export default AddTodo
