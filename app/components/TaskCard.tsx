import React from "react";

interface TaskCardProps {
    text: string;
    color: string;
}

function TaskCard({text, color}: TaskCardProps){

    return(
        <div className={`w-full bg-white rounded shadow-md text-center p-8 mt-4 text-${color}`}>
            <div className="text-6xl font-bold mb-4">{text}</div>
        </div>
    );
}

export default TaskCard