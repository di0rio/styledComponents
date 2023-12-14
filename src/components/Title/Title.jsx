import Button from "../Button/Button.jsx";
import * as c from "./styles.js";

const Title = ({children}) => {
  return (
    <c.container>
      <c.titulo>{children}</c.titulo>

    </c.container>
  );
};

export default Title;
