const App = () => {
  let status = false;
  return (
    <>
      <h1>Login status</h1>
      {status && <button>Logout</button>}
    </>
  );
};

export default App;
