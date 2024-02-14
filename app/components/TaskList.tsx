import React from 'react';
import TaskCard from '~/components/TaskCard';

function TaskList(){
    
    const tasks = [
        {text: 'Complete dashboard', color: 'yellow-300', initialTime: 300},
        {text: 'Organise email accounts & github accounts', color: 'yellow-300', initialTime: 300},
    ];
    
    return(
        <div className="w-full flex flex-col justify-center items-center">
            {tasks.map((task, index) => (
                <TaskCard key={index} text={task.text} color={task.color} initialTime={task.initialTime} />
            ))}
        </div> 
    );
}

export default TaskList