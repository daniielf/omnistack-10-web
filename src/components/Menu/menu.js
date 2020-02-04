import React, { useEffect, useState } from 'react';
import './menu.css';
import Api from '../../providers/api';

function Menu({ userCreated }) {
  const [usernameInput, setUsername] = useState('');
  const [techsInput, setTechs] = useState('');
  const [latInput, setLat] = useState('');
  const [lngInput, setLng] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      setLat(lat);
      setLng(lng);
    }, err => {
      console.log(err);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    addUser();
  }

  async function addUser() {
    if (usernameInput !== '' && techsInput !== '' && latInput !== '' && lngInput !== '') {

      const data = {
        username: usernameInput,
        techs: techsInput,
        lat: latInput,
        lng: lngInput
      };

      Api.post('users/create', data).then((res) => {
        if (res) {
          userCreated();
        } else {
          alert('Não foi possível cadastrar o usuário');
        }
      }).catch((err) => {
        console.log('err', err);
        alert('Não foi possível cadastrar o usuário');
      });
     
    } else {
      console.log('FAILED');
    }
  }

  return (
      <div className="menu">
        <span className="title">Cadastrar</span>
        <div className="input-field">
          <form id="form" onSubmit={handleSubmit}>
            <div className="input-block">
              <label htmlFor="username">Github Username</label>
              <input type="text" name="username" id="username" required value={usernameInput}
                onChange={(text) => setUsername(text.target.value)}
              ></input>
            </div>


            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input type="text" name="techs" id="techs" required value={techsInput}
                onChange={(text) => setTechs(text.target.value)}
              ></input>
            </div>


            <div className="location-input">
              <div className="input-block">
                <label htmlFor="lat">Lat</label>
                <input type="number" name="lat" id="lat" value={latInput} required
                  onChange={(text) => { setLat(text.target.value) }}
                ></input>
              </div>


              <div className="input-block">
                <label  htmlFor="lng">Lng</label>
                <input type="number" name="lng" id="lng" value={lngInput} required
                 onChange={(text) => { setLng(text.target.value) }}
                ></input>
              </div>
            </div>

            <button className="buttonInput" type="submit">
              Enviar
            </button>
 

          </form>
        </div>
      </div>
  );
}

export default Menu;
