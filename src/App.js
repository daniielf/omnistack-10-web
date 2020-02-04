import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/card.js';
import Menu from './components/Menu/menu.js';
import Api from './providers/api.js';

function App() {
  var [userList, setUsersList] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
  var [firstCallHasBeenMade, setFirstCallState] = useState(false);

  var name = '';
  const [testInput, setTest] = useState('');

  useEffect(() => {
    retrieveUsers();
  }, []);

  function retrieveUsers() {
    Api.get('users').then((res) => {
      console.log(res);
      if (res && res.data.length > 0) {
        setUsersList(res.data);
      }
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setFirstCallState(true);
    });
  }

  return (
    <div className="content">
        <h2>Hello React</h2>
        <div className="body-content">

        </div>
        <div className="home-body">
          <Menu></Menu>
          {
            firstCallHasBeenMade ? 
            <ul className="display">
              { userList && userList.map((elem) => {
                return (
                  <li key={elem._id} className="card">
                    <Card key={elem._id} profile={elem}></Card>
                  </li>

                )
              }) }
            </ul> :
            <div className="display">
              <span className="not-found-txt">Nenhum Usuário Encontrado</span>
            </div>
          }
          
        </div>
    </div>
  );
}

export default App;