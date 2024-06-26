const App = () => {
  const status = true;

  return (
    <>
      <h1>Login Status</h1>
      <button>{status ? "Logout" : "Login"}</button>
    </>
  );
};

export default App;
