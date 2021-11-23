import React from 'react';
import CreateUser from '../Components/CreateUser';
import SeeUser from '../Components/SeeUser';
import { BasicContainer } from './BasicConainer';

const Hello = () => {
  return (
    <div>
      <SeeUser />
      <CreateUser />
    </div>
  );
}

export default Hello;