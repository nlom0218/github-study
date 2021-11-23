import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import styled from 'styled-components';
import { BasicContainer } from './BasicConainer';

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

const Hello = () => {
  const { data, loading } = useQuery(SEE_USER_QUERY, {
  })
  return (
    <BasicContainer>
      <UserList>
        {!loading && data.seeUser.map((user, index) => {
          return <User key={index}>
            <div>email: {user.email}</div>
          </User>
        })}
      </UserList>
    </BasicContainer>
  );
}

export default Hello;