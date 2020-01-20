import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/card.js';

function App() {
  var [userList, setUsersList] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);

  useEffect(() => {
    setTimeout(() => {

      // var removeItem = userList.length;
      // if (removeItem > 0) {
      //   var newList = userList.filter((elem) => elem != removeItem);
      //   console.log(newList, 'removed', removeItem);
      //   setUsersList(newList);
      // }
    }, 2000);
  }, [userList]);

  // var a = [1,1,1,1,1,1,1,1,1,1,1,1];
  return (
    <div className="content">
        <h2>Hello React</h2>
        <div className="body-content">

        </div>
        <div className="home-body">
          <div className="menu">
            <h1>Search</h1>
            <span className="input-label">Nome</span>
            <input className="input-edit" placeholder="Search for name, skill, bio..."></input>
            <button className="search-button">Search</button>
          </div>
          <ul className="display">
            { userList && userList.map((elem) => {
              return (
                <li key={elem} className="card">
                  <Card></Card>
                </li>

              )
            }) }
          </ul>
        </div>
    </div>
  );
}

export default App;
