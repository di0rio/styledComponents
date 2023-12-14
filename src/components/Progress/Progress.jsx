import { useContext } from "react";
import * as C from "./styles";
import { AppContext } from "../../AppContext";
const Progress = () => {
  const { num } = useContext(AppContext);
  return <C.progress progressBarValue={num}></C.progress>;
};

export default Progress;
