import styled from "styled-components";

export const BasicContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: ; */
  column-gap: 20px;
  row-gap: 20px;
  justify-items: center;
  align-items: center;
`