import React from "react";
import dbClickicon from "../assets/dbClick.png";

const Legends = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-around items-center">
            <div className="flex items-center justify-center">
                <img className="h-6 w-6" src={dbClickicon} alt="click" />
                <p>Click for Completed Task</p>
            </div>
                <div className="flex items-center justify-center">
                    <span className="inline-block h-5 w-5 rounded-full mr-1.5 bg-gray-200"></span>
                    <p>Not Complete</p>
                </div>
                <div className="flex items-center justify-center">
                    <span className="inline-block h-5 w-5 rounded-full mr-1.5 bg-green-200"></span>
                    <p>Completed</p>
                </div>
            </div>
        </div>
    )
}

export default Legends
