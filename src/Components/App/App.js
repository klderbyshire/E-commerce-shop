import React from 'react';
import { useState, useEffect} from 'react';
import './App.css';
import Cards from '../Cards/cards.js'; 

function App() {

    const [data, setData] = useState()

    useEffect(() => {
    const getData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    setData(data)
    console.log(data)
  }
  getData()
   }, []);

  return (
    <div className="App">
      <h1>Shop!</h1>
      <Cards/>
    </div>
  );
}

export default App;
