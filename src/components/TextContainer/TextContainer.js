import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          
          <div className="card ">
            <div className="card-header">
            <h1>Online:</h1>
            </div>
            <div className="card-body">
              <div className="activeContainer">
               <h3>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
               </h3>
               </div>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;