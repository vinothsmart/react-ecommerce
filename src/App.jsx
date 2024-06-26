import { useCallback } from "react";
import Hero from "./component/Hero";

const App = () => {
  const handleClick = useCallback(() => {
    alert("Login successful");
  }, []);
  return (
    <>
      <h1>Login status</h1>
      <Hero handleClick={handleClick} />
    </>
  );
};

export default App;
