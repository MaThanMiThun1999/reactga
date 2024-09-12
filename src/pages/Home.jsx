import React from 'react';
import MyButton from '../components/home/MyButton';
import { Link } from 'react-router-dom';

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

      <Link to='/contact' className='text-white'>
        <MyButton
          btnCategory='User Actions'
          btnAction='Contact Button Action'
          btnLabel='Contact Page'
          btnText='Go to Contact Page'
        ></MyButton>
      </Link>
      <MyButton
        btnCategory='User Actions'
        btnAction='Submit Form'
        btnLabel='Form Submission'
        btnText='Submit'
      />
    </div>
  );
};

export default Home;
