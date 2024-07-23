import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("Hi Vinoth");
  }, []);
  return <div>App</div>;
};

export default App;
