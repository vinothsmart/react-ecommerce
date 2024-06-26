import { useCallback } from "react";

const App = () => {
  const handleClick = useCallback(() => {
    alert("hai");
  }, []);
  return (
    <>
      <button onClick={handleClick}>Submit</button>
    </>
  );
};

export default App;
