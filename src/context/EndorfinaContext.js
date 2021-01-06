import React, { useState } from 'react';
import Endorfina from './index';

const EndorfinaContext = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const context = {
    userData,
    setUserData,
  };

  return <Endorfina.Provider value={context}>{children}</Endorfina.Provider>;
};

export default EndorfinaContext;
