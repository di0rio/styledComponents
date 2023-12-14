import styled from "styled-components";

export const progress = styled.div`
  width: 100%;
  background: ${(props) =>
    props.progressBarValue == 1
      ? "#BE0000"
      : props.progressBarValue == 2
      ? "#BE0000"
      : props.progressBarValue == 3
      ? "#BE0000"
      : props.progressBarValue == 4
      ? "#BE0000"
      : props.progressBarValue == 5
      ? "#E48900"
      : props.progressBarValue == 6
      ? "#E48900"
      : props.progressBarValue == 7
      ? "#E48900"
      : props.progressBarValue == 8
      ? "#9EDE73"
      : props.progressBarValue == 9
      ? "#9EDE73"
      : props.progressBarValue == 10 && "green"};
  width: 100%;
  height: 20px;
  transition: all 0.8s;
  transform: translateX(${(props) => `-${100 - props.progressBarValue * 10}%`});
`;
