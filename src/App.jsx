import { useCallback, useState } from "react";
import Item from "./Item";

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
      <p>{list.length}</p>
      <input type="text" placeholder="name" onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <Item list={list} />
    </>
  );
};

export default App;
