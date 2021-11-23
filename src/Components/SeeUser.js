import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

const SEE_USER_QUERY = gql`
  query SeeUser {
    seeUser {
      _id
      email
      password
    }
  }
`

const UserList = styled.ul`

`

const User = styled.li``

const SeeUser = () => {
  const { data, loading } = useQuery(SEE_USER_QUERY, {
  })
  return (<UserList>
    {!loading && data.seeUser.map((user, index) => {
      return <User key={index}>
        <div>email: {user.email}</div>
      </User>
    })}
  </UserList>);
}

export default SeeUser;