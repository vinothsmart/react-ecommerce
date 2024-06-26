import { useRef } from "react";

const App = () => {
  const myHeadline = useRef();
  myHeadline.current.innerHTML = "Hi Vinoth using useRef!";

  const handleClick = () => {
    myHeadline.current.innerHTML = "Hello Vinoth";
  };
  return (
    <>
      <h1 ref={myHeadline}></h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default App;
