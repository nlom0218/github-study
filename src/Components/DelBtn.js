import React from 'react';
import styled from 'styled-components';
import { FcFullTrash } from "react-icons/fc";

const SDelBtn = styled.div`
  cursor: pointer;
  margin-left: 20px;
`

const DelBtn = () => {
  return (<SDelBtn><FcFullTrash /></SDelBtn>);
}

export default DelBtn;