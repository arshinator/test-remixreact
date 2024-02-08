import ReactDOM from 'react-dom';
import React, {useEffect, useState} from 'react';
import '../styles/tailwind.css';
import FullscreenButton from '~/components/FullscreenButton';

function HomePage() {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString('en-US',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute:'numeric',
        second: 'numeric',
        hour12: true,
      });
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-start items-start bg-gray-100 p-4">
      <div className="w-full bg-white rounded shadow-md text-center mb-4 p-8">
        <div className="text-6xl font-bold text-green-400 mb-4">{currentDateTime}</div>
      </div>
      <div className="divider divider-accent">TODAY'S TASKS</div>
      <div className="w-full bg-white rounded shadow-md text-center p-8 text-yellow-500">
        <div className="text-6xl font-bold mb-4 line-through">Card 1</div> 
      </div>
      <div className="w-full bg-white rounded shadow-md text-center p-8 mt-4 text-yellow-400">
        <div className="text-6xl font-bold mb-4">Card 2</div>
      </div>
      <div className="w-full bg-white rounded shadow-md text-center p-8 mt-4 text-yellow-300">
        <div className="text-6xl font-bold mb-4">Card 3</div>
      </div>
      <div className="w-full bg-white rounded shadow-md text-center p-8 mt-4 text-yellow-200">
        <div className="text-6xl font-bold mb-4">Card 4</div>
      </div>
      <FullscreenButton />
    </div>
  );
}

export default HomePage;
