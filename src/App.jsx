import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import ReactGA from 'react-ga4';
import MyButton from './components/home/MyButton';
import Home from './pages/Home';
import Contact from './pages/Contact';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);

  return (
    <main>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  );
};

export default App;
