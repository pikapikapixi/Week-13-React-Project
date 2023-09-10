import React from 'react';
import LoginForm from './LoginForm';
import Navigation from './Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="center">
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
