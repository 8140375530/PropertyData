import React from 'react';
import { IContext } from '../interface';

const context: IContext = {
  userData: {},
  setUserData: () => { },
};

const ContextData = React.createContext(context);

export default ContextData;
