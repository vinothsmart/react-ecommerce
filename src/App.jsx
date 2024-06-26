import { useRef } from "react";

const App = () => {
  const textRef = useRef();
  const handleClick = () => {
    textRef.current.className = "text-danger";
  };

  return (
    <>
      <h1 className="text-success" ref={textRef}>
        This is Head line
      </h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
};

export default App;
