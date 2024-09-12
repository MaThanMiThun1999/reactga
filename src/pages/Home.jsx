import React from 'react';
import MyButton from '../components/home/MyButton';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the Home Page.</p>
      <p>Host: {window.location.host}</p>
      <p>Location: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
      <p>Location: {location.pathname + location.search}</p>
      <p>History: {JSON.stringify(location)}</p>
      <MyButton
        btnCategory='Home Page Button'
        btnAction='Clicked Home Page Button'
        btnLabel='Home Page Button'
      />
    </div>
  );
};

export default Home;
