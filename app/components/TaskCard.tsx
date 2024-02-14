import React from "react";
import Timer from "./Timer";

interface TaskCardProps {
    text: string;
    color: string;
    initialTime: number;
}

function TaskCard({text, color, initialTime}: TaskCardProps){

    return(
        <div className={`w-full bg-base-100 rounded shadow-md p-8 mt-4 text-${color}`}>
            <div className="text-6xl text-primary font-bold mb-4">{text}</div>
            {/* <Timer initialTime={initialTime} /> */}
        </div>
    );
}

export default TaskCard