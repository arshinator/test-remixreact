import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import '../styles/tailwind.css';
import FullscreenButton from '~/components/FullscreenButton';
import TimeCard from '~/components/TimeCard';
import TaskList from '~/components/TaskList';
import Divider from '~/components/Divider';
import DateDisplay from '~/components/DateDisplay';

function HomePage() {

  return (
    <div className="min-h-screen flex flex-col justify-start items-start bg-gray-100 p-4">
      <DateDisplay />
      <TimeCard />
      <Divider />
      <TaskList />
      <FullscreenButton />
    </div>
  );

}

export default HomePage;
