import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header style={{ backgroundColor: '#282c34', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 'calc(10px + 2vmin)', color: 'white' }}>
        <h1>Welcome to My Sample React App!</h1>
        <p>This is a sample React application to demonstrate Dockerization and deployment on AWS ECS.</p>
      </header>
    </div>
  );
}

export default App;
