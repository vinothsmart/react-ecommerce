const App = () => {
  let status = false;
  return (
    <>
      <h1>Login status</h1>
      {(() => {
        if (status) {
          return <button>Logout</button>;
        } else {
          return <button>Login</button>;
        }
      })()}
    </>
  );
};

export default App;
