import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';


function DateTimeCard() {

  const [currentDateTime, setCurrentDateTime] = useState<string>('');
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [formattedTime, setFormattedTime] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();

      const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };

      setFormattedDate(now.toLocaleString('en-US', dateOptions));
      setFormattedTime(now.toLocaleString('en-US', timeOptions));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

    return (
    <div className="w-full rounded shadow-md text-center mb-4 p-8 bg-gradient-to-b from-purple-500 to-purple-300 flex flex-col items-center">
        <div className="flex-grow"></div> {/* Empty space to push content to the top */}
          <div className="text-6xl text-white mb-4">{formattedDate}</div>
            <div className="rounded-md border border-4 border-white p-4">
            <div className="text-8xl font-serif font-bold text-white flex-grow w-full text-center">{formattedTime}</div>
        </div>
    </div>
    );
}

export default DateTimeCard;