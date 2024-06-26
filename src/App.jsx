import { useRef } from "react";

const App = () => {
  const myImage = useRef();

  const handleClick = () => {
    myImage.current.src = "https://placehold.co/600x400/000000/FFF";
    myImage.current.setAttribute("height", "200");
    myImage.current.setAttribute("width", "300");
  };

  return (
    <>
      <img ref={myImage} src="https://placehold.co/600x400" />
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default App;
