import { useCallback, useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  const handleIncrement = useCallback(() => {
    setNumber((prev) => prev + 1);
  }, []);

  return (
    <>
      <h1>Number: {number}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default App;
