import React from 'react';
import './card.css';
// import a from '../../assets/florence-placeholder.jpg'

function Card() {
  return (
    <div className="card-content">
      <div className="photo-content">
        <div className="photo-circle">
          <img className="photo" alt="placeholder" src="https://terroirauburn.com.au/wp-content/uploads/2018/04/blank-profile-picture-973460_960_720.png" />
        </div>
      </div>
      <div className="info-content">
        <h2>Nome</h2>
        <p>Bio</p>
        <p>Techs</p>
      </div>
    </div>
  );
}

export default Card;
