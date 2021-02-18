import React from 'react';
import '../style/header.css';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="container-fluid text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ...">
            <div className="container mx-auto flex justify-between py-2.5">
                <h1 className="title text-3xl font-extrabold">Todo App</h1>
                <ul className="flex justify-around">
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/about">About</Link> </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
