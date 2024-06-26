import { useRef } from "react";

const App = () => {
  const textRef = useRef();
  const handleClick = () => {
    textRef.current.classList.remove("text-success");
    textRef.current.classList.add("text-danger");
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
