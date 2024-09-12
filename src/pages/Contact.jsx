import React from 'react';
import MyButton from '../components/home/MyButton';

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
      <MyButton
        btnCategory='Contact Page Button'
        btnAction='Clicked Contact Page Button'
        btnLabel='Contact Page Button'
      />
    </div>
  );
};

export default Contact;
