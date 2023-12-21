import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Switch = ({SwitchOn, onToggle}) => {
  const location = useLocation();
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    if(location.pathname === "/dashboard/settings/payment-methods"){
      onToggle(!SwitchOn)
    }
  };

  


  return (
    <div
      className={`relative w-10 h-6 rounded-full border-2 ${isOn ? 'bg-indigo-600 border-gray-300' : 'bg-gray-300 border-gray-300'} cursor-pointer`}
      onClick={handleToggle}>
      <div
        className={`absolute w-5 h-5 rounded-full bg-white shadow-md ${isOn ? '-right-2.5 bg-white transform translate-x-full' : 'left-2.5'}`}
        style={{ top: '50%', transform: 'translate(-50%, -50%)', transition: 'transform 0.3s ease' }}
      ></div>
    </div>
  );
};

export default Switch;