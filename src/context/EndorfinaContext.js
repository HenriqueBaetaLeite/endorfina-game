import React, { useState } from 'react';
import Endorfina from './index';

const EndorfinaContext = ({ children }) => {
  const [userData, setUserData] = useState({});

  const context = {
    setUserData,
    userData,
  };

  return <Endorfina.Provider value={context}>{children}</Endorfina.Provider>;
};

export default EndorfinaContext;
