import React from 'react';
import Header from './Components/Header/Header';


function App() {
  return (
    <React.Fragment>
      <div className='layout'>
        <Header/>
        <main>Main</main>
        <footer>Footer</footer>
      </div>
    </React.Fragment>
  );
}

export default App;
