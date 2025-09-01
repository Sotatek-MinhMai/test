import React from 'react';
import './App.css';

const Heart = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="heart"></div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-red-600 mt-4">
        Máy trợ tim :vv
      </h1>
      <Heart />
    </div>
  );
};

export default App;