import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import '../styles/tailwind.css';
import FullscreenButton from '~/components/FullscreenButton';
import DateTimeCard from '~/components/DateTimeCard';
import TaskList from '~/components/TaskList';
import Divider from '~/components/Divider';

function HomePage() {

  return (
    <div className="min-h-screen flex flex-col justify-start items-start bg-gray-100 p-4">
      <DateTimeCard />
      <Divider />
      <TaskList />
      <FullscreenButton />
    </div>
  );

}

export default HomePage;
