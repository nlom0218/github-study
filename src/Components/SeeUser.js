import React from 'react';
import styled from 'styled-components';
import DelBtn from './DelBtn';

const UserList = styled.ul`
`

const User = styled.li`
  display: flex;
`


const SeeUser = ({ users, refetch }) => {
  return (<UserList>
    {users.map((user, index) => {
      return <User key={index}>
        <div>email: {user.email}</div>
        <DelBtn email={user.email} refetch={refetch} />
      </User>
    })}
  </UserList>);
}

export default SeeUser;