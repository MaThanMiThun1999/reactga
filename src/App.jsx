import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import ReactGA from 'react-ga4';
import Title from './components/home/Title';
import MyButton from './components/home/MyButton';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);

  return (
    <div>
      <Title />
      <p>This is the App Page.</p>
      <p>Host: {window.location.host}</p>
      <p>Location: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
      <p>Location: {location.pathname + location.search}</p>
      <p>History: {JSON.stringify(location)}</p>
      <MyButton />
    </div>
  );
};

export default App;
