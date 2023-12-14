import { useContext, useState } from "react";
import * as C from "./styled";
import { AppContext } from "../../AppContext";
const Button = () => {
  const [contador, setContador] = useState(0);
  const { setNum, num } = useContext(AppContext);

  const handleAdd = () => {
    contador < 10 ? setContador(contador + 1) : alert("Acabou paizao");
  };
  console.log(num, contador);

  setNum(contador);

  return (
    <C.Button customColor={"#abc"} onClick={handleAdd}>
      + {num}
    </C.Button>
  );
};

export default Button;
