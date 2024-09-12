import ReactGA from 'react-ga4';

const MyButton = () => {
  const handleClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked My Button',
      label: 'My Button',
      value: 1,
    });
    console.log('Clicked My Button');
    alert(`Clicked My Button\nHost: ${window.location.host}\nLocation: ${window.location.pathname}\nSearch: ${window.location.search}\nHash: ${window.location.hash}\nLocation: ${window.location.pathname + window.location.search}\nHistory: ${JSON.stringify(window.location)}`);
  };
  return <button className='px-2 py-3 border-2 font-black border-gray-600 rounded-xl' onClick={handleClick}>Click Me</button>;
};

export default MyButton;