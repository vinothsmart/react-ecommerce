import { useCallback } from "react";

const App = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Form submitted");
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <button>Submit</button>
      </form>
    </>
  );
};

export default App;
