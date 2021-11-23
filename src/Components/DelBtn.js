import React from 'react';
import styled from 'styled-components';
import { FcFullTrash } from "react-icons/fc";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($email: String!) {
    deleteUser(email: $email) {
      ok
    }
  }
`

const SDelBtn = styled.div`
  cursor: pointer;
  margin-left: 10px;
`

const DelBtn = ({ email }) => {
  const [deleteUser, { loading }] = useMutation(DELETE_USER_MUTATION)
  const onClickDelBtn = () => {
    if (loading) {
      return
    }
    deleteUser({
      variables: {
        email
      }
    })
  }
  return (<SDelBtn onClick={onClickDelBtn}>
    <FcFullTrash />
  </SDelBtn>);
}

export default DelBtn;