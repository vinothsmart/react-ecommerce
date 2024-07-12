import { useCallback, useState } from "react";

const App = () => {
  const [names, setNames] = useState({
    key1: "value1",
    key2: "value2",
    key3: "value3",
  });

  const handleChange = useCallback(() => {
    setNames({
      key1: "value1 changed",
      key2: "value2 changed",
      key3: "value3 changed",
    });
  }, []);

  return (
    <>
      <h1>{names.key2}</h1>
      <button onClick={handleChange}>Change value</button>
    </>
  );
};

export default App;
