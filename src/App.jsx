import { useCallback, useState } from "react";
import ItemList from "./ItemList";

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const handleChange = useCallback((e) => {
    setItem(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    setList((prev) => [...prev, item]);
  }, [item]);

  return (
    <>
      <ItemList list={list} />
      <input type="text" placeholder="name" onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default App;
