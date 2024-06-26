import Hero from "./component/Hero";

const App = () => {
  const item = {
    name: "vinoth",
    age: 25,
    city: "chennai",
  };
  return (
    <>
      <h1>Login status</h1>
      <Hero item={item} />
    </>
  );
};

export default App;
