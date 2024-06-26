const LoginButtonStatus = (status) => {
  return <button>{status ? "Logout" : "Login"}</button>;
};

const App = () => {
  const status = true;
  return (
    <>
      <h1>Login Status</h1>
      {LoginButtonStatus(status)}
    </>
  );
};

export default App;
