import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      ok
    }
  }
`

const Container = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  input {
    width: 250px;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 7px 20px;
  }
`

const InputBtn = styled.input`
  opacity: ${props => props.isValid ? 1 : 0.6};
  transition: opacity 0.6s ease;
`

const CreateUser = () => {
  const [msg, setMsg] = useState(undefined)
  const { register, formState: { isValid }, getValues, handleSubmit } = useForm({
    mode: "onChange"
  })
  const onCompleted = (result) => {
    const { createUser: { ok } } = result
    if (ok) {
      setMsg("회원가입이 완료 되었습니다.")
    }
  }
  const [createUser, { loading }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted
  })
  const onSubmit = (data) => {
    const { email, password } = data
    console.log(email, password);
    createUser({
      variables: {
        email,
        password
      }
    })
  }
  return (<Container onSubmit={handleSubmit(onSubmit)}>
    <div>계정생성</div>
    <input
      {...register("email", {
        required: true
      })}
      placeholder="이메일을 입력하세요"
      type="email"
      autoComplete="off"
    />
    <input
      {...register("password", {
        required: true
      })}
      placeholder="비밀번호를 입력하세요"
      type="password"
      autoComplete="off"
    />
    <InputBtn
      type="submit"
      value="회원가입"
      isValid={isValid}
    />
    {msg && <div>{msg}</div>}
  </Container>);
}

export default CreateUser;