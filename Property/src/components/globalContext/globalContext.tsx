import React, { useState } from 'react';
import ContextData from '../../data/context';

const GlobalContext = (props: { children: any; }) => {

  // const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState({});

  const themeData = {
    userData,
    setUserData,
  };

  return (
    <ContextData.Provider value={themeData}>
      {props.children}
    </ContextData.Provider>
  );
};


export default GlobalContext;
