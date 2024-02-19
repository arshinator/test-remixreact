import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';


function TimeCard() {

  const [currentDateTime, setCurrentDateTime] = useState<string>('');
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [formattedTime, setFormattedTime] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();

      const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };

      setFormattedTime(now.toLocaleString('en-US', timeOptions));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

    return (
    <div className="w-full rounded card glass text-center mb-4 p-8 bg-gradient-to-b from-purple-500 to-purple-300 flex flex-col items-center">
        <div className="flex-grow"></div> {/* Empty space to push content to the top */}
        <div className="text-9xl font-serif font-bold text-white flex-grow w-full text-center">{formattedTime}</div>
    </div>
    );
}

export default TimeCard;