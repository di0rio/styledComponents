import styled from "styled-components";

export const titulo = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;

  &:hover {
    color: green;
  }
`;

export const container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: aqua;

  &:hover {
    background: brown;
    color: green;
  }

  @media (max-width: 768px) {
    background: red;
  }
`;
