import React, { useEffect, useState, useCallback } from "react";
import './App.css';

const avatarUrl = `http://github.com/naderik.png`


function App() {

  const [data, setData] = useState([]);

  const fetchData = useCallback(() => {
    fetch(`https://api.github.com/users/naderik`)
      .then((response) => response.json())
      .then(data => setData(data))
  }, []);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  console.log(data)

  if (data) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={avatarUrl} className="App-logo" alt="logo" />
          <p>
            Personal E-Portfolio !
          </p>
          <p>My name is {data.name}</p>
        </header>
      </div>
    );

  } else {
    return(
      <h1>Loading...</h1>
    )
  }



};

export default App;
