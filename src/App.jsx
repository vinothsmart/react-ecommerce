import { useCallback } from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [product, setProduct] = useState([]);

  const fetchProductDetail = useCallback(async () => {
    const result = await fetch("https://dummyjson.com/products/1");
    const data = await result.json();
    setProduct(data);
  }, []);

  useEffect(() => {
    fetchProductDetail();
  }, [fetchProductDetail]);

  return <div>{JSON.stringify(product)}</div>;
};

export default App;
