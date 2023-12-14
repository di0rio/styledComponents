import "./App.css";
import { Bar } from "./AppContext.jsx";
import Button from "./components/Button/Button.jsx";
import Progress from "./components/Progress/Progress.jsx";
import Title from "./components/Title/Title.jsx";

function App() {
  return (
    <>
      <Bar>
        <Title>hello world!</Title>
        <Progress />
        <Button />
      </Bar>
    </>
  );
}

export default App;
