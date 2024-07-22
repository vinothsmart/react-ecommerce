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

  const handleRemove = useCallback(
    (selectedIndex) => () => {
      setList((prev) => prev.filter((_, i) => i !== selectedIndex));
      // list.splice(selectedIndex, 1);
      // setList([...list]);
    },
    []
  );

  return (
    <>
      <ItemList list={list} handleRemove={handleRemove} />
      <input type="text" placeholder="name" onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default App;
