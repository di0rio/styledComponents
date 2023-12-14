import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 5.2em;
  background: ${(props) => props.customColor || "#bbb"};
`;
