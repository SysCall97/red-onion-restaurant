import React, { useState } from 'react';
import './App.css';
import View from './components/View/View';

export const notificationContext = React.createContext();

function App() {
  const [total, setTotal] = useState(0);
  
  return (
    <notificationContext.Provider value={[total, setTotal]} className="app">
      <View />
    </notificationContext.Provider>
  );
}

export default App;
