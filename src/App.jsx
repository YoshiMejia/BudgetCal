import { useState } from 'react';
import Calendar from './components/Calendar';
import EventsModal from './components/EventsModal';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EventsModal />
      <Calendar />
    </>
  );
}

export default App;
