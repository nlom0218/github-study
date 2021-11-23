import React from 'react';
import CreateUser from '../Components/CreateUser';
import SeeUser from '../Components/SeeUser';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const SEE_USER_QUERY = gql`
  query SeeUser {
    seeUser {
      _id
      email
      password
    }
  }
`


const Hello = () => {
  const { data, loading, refetch } = useQuery(SEE_USER_QUERY, {
  })
  return (
    <div>
      {loading ? "로딩중...." : <SeeUser users={data?.seeUser} refetch={refetch} />}
      <CreateUser refetch={refetch} />
    </div>
  );
}

export default Hello;