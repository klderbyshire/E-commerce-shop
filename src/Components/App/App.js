import React from 'react';
import './App.css';

function App() {

  const getData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    console.log(data)
  }
  getData()


  return (
    <div className="App">
      <h1>Shop!</h1>
    </div>
  );
}

export default App;
