import React from "react";
import {useState} from "react";
import PropTypes from "prop-types";

const FilterTodos = ({FilterTodosList}) => {

    // State Filter
    const [filter, setFilter] = useState("100");

    // onChange Event handler of Filter input
    const changeFilter = (filter) => {
        setFilter(filter);
        FilterTodosList(filter);
    };

    return (
        <div className="container mx-auto">
            <div className="flex items-center">
                <h3 className="font-extrabold my-5 text-2xl text-gray-700">Filter Todos:</h3>
                <select 
                    value={filter}
                    onChange={(e) => changeFilter(e.target.value)}
                    className="appearance-none ml-5 text-sm border focus:outline-none outline-none border-purple-500 rounded py-1.5 px-2.5"
                >
                    <option value="200">200</option>
                    <option value="100">100</option>
                    <option value="50">50</option>
                    <option value="20">20</option>
                    <option value="10">10</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
    )
}

// State types of todos
FilterTodos.propTypes = {
    FilterTodosList: PropTypes.func
}

export default FilterTodos
