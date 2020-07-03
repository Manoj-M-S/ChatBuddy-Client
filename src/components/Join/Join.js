import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      
      <div className="joinInnerContainer">
      <div className="jumbotron  text-center">
        <h2 className="display-4 ">Welcome To ChatBuddy <span role="img" aria-label="emoji">💬</span></h2>
      </div>
    
          <div className="card ">
         
            <div className="card-header lead">
              <h3>Join</h3>
            </div>
            <div className="card-body">
              <form >
                <div className="form-group">
                  <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />

                </div>
                <div className="form-group">
                  <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />

                </div>

                <div className="form-group">
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
                </div>
              </form>
            </div>
          </div>
        </div> 
    </div>
  );
}
