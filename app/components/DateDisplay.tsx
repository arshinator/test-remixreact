import { useState, useEffect } from "react";

function DateDisplay() {
    const [formattedDate, setFormattedDate] = useState<string>('');

    useEffect(() => {
        const intervalId = setInterval(() => {
          const now = new Date();
    
          const dateOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          };
    
          setFormattedDate(now.toLocaleString('en-US', dateOptions));
          
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-6xl mb-4 w-full flex flex-col justify-center items-center text-primary">{formattedDate}</div>
    );

}

export default DateDisplay