import React from 'react';
import ReactGA from 'react-ga4';

const MyButton = React.memo(
  ({
    btnCategory = 'Default Page Button',
    btnAction = 'Clicked Default Page Button',
    btnLabel = 'Default Page Button',
    btnText = 'Click Me',
  }) => {
    const handleClick = () => {
      ReactGA.event({
        category: btnCategory,
        action: btnAction,
        label: btnLabel,
      });
    };

    return (
      <button
        className='px-2 py-3 border-2 font-black border-gray-600 bg-black/90 text-white rounded-xl'
        onClick={handleClick}
      >
        {btnText}
      </button>
    );
  }
);

export default MyButton;
