import { useCallback } from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [product, setProduct] = useState([]);

  const fetchProductDetail = useCallback(() => {
    fetch("https://dummyjson.com/products/1").then((response) =>
      response.json().then((data) => {
        setProduct(data);
      })
    );
  }, []);

  useEffect(() => {
    fetchProductDetail();
  }, [fetchProductDetail]);

  return <div>{JSON.stringify(product)}</div>;
};

export default App;
