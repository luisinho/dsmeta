import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header';
import NotificationButton from './components/NotificationButton';
import SalesCard from './components/SalesCard';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
