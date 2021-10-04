import React from 'react';
import { Link } from 'react-router-dom';

export default function UserItem({user: {avatar_url, login, html_url}}) {
  
  return ( 
  <div className='card text-center'>
    <img src={avatar_url} alt={login} className='round-img' style={{width: '60px'}}/>
    <h1>{login}</h1>
    <div>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
    </div>
  </div>
  )}
