import { useCallback, useState } from "react";

const App = () => {
  const [names, setNames] = useState({
    key1: "value1",
    key2: "value2",
    key3: "value3",
  });

  const handleChange = useCallback(() => {
    setNames((prevNames) => {
      return {
        ...prevNames,
        key1: "new value",
      };
    });
  }, []);

  return (
    <>
      <h1>{names.key1}</h1>
      <button onClick={handleChange}>Change value</button>
    </>
  );
};

export default App;
