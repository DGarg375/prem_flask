import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';

function App() {
  const [something, setSomething] = useState({
    "name": "waiting for data...",
    "about": "waiting for data..."
  });

  useEffect(() => {
    axios({
      method: "GET",
      url:"https://cat-fact.herokuapp.com/facts",
    })
    .then((response) => {
      const res = response.data
      console.log(res)
      setSomething(({
        name: res.name,
        about: res.about
      }))
    }).catch((error) => {
      if(error.response) {
        console.log(error.response)
      }
    });
  }, []);

  return (
    <div className="App">
      name: {something.name}<br></br>
      about: {something.about}
    </div>
  );
}

export default App;
