import React from 'react';
import TaskCard from '~/components/TaskCard';

function TaskList(){
    
    const tasks = [
        {text: 'Card 1', color: 'yellow-500'},
        {text: 'Card 2', color: 'yellow-400'},
        {text: 'Card 3', color: 'yellow-300'},
    ];
    
    return(
        <div className="w-full flex flex-col justify-center items-center">
            {tasks.map((task, index) => (
                <TaskCard key={index} text={task.text} color={task.color} />
            ))}
        </div> 
    );
}

export default TaskList