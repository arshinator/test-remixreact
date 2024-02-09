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
        <div className="text-5xl mb-4 w-full flex flex-col justify-center items-center">
  <span style={{
    background: '-webkit-linear-gradient(45deg, #8B5CF6, #9333EA)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}>{formattedDate}</span>
</div>
    );

}

export default DateDisplay