import React, { useEffect, useState } from 'react';
import './card.css';
// import a from '../../assets/florence-placeholder.jpg'

function Card(props) {
  var [profile, setProfile] = useState(props.profile);
  useEffect((elem) => {
    // console.log('Props', props);
  }, [])
  return (
    <div className="card-content">
      <div className="photo-content">
        <div className="photo-circle">
          <img className="photo" alt="placeholder" src={profile.avatar_url} />
        </div>
      </div>
      <div className="info-content">
        <h2>{ profile.name }</h2>
        <p>{ profile.bio }</p>
        <p>{ profile.techs }</p>
      </div>
    </div>
  );
}

export default Card;
