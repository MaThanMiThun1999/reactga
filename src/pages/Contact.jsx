import React from 'react';
import MyButton from '../components/home/MyButton';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the Contact Page.</p>
      <p>Host: {window.location.host}</p>
      <p>Location: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
      <p>Location: {location.pathname + location.search}</p>
      <p>History: {JSON.stringify(location)}</p>
      <Link to='/'>
        <MyButton
          btnCategory='Back Actions'
          btnAction='Back Button Action'
          btnLabel='Back Button Submission'
          btnText='Back To Home'
        />
      </Link>
    </div>
  );
};

export default Contact;
