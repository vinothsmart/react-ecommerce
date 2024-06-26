import { useRef } from "react";

const App = () => {
  let myHeadline = useRef();

  const handleClick = () => {
    myHeadline.innerHTML = "Hello Vinoth";
  };
  return (
    <>
      <h1 ref={(h1) => (myHeadline = h1)}></h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default App;
