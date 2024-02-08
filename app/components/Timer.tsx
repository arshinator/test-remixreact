// Timer.tsx
import React, { useState, useEffect } from "react";

interface TimerProps {
  initialTime: number; // initial time in seconds
}

function Timer({ initialTime }: TimerProps) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="text-3xl font-bold mt-4">
      Timer: {formatTime(time)}
    </div>
  );
}

export default Timer;
