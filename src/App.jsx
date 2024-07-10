import { useCallback, useRef } from "react";

const App = () => {
  const APIData = useRef(null);
  const pageRef = useRef();

  const fetchData = useCallback(async () => {
    const result = await fetch("https://dummyjson.com/products");
    APIData.current = await result.json();
  }, []);

  const showData = useCallback(() => {
    pageRef.current.textContent = JSON.stringify(APIData.current, null, 2);
  }, []);

  return (
    <>
      <p ref={pageRef}></p>
      <button className="btn btn-primary mt-2 me-2" onClick={fetchData}>
        Call API
      </button>
      <button className="btn btn-primary mt-2" onClick={showData}>
        Show Data
      </button>
    </>
  );
};

export default App;
