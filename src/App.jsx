const App = () => {
  let status = true;
  return <>{status ? <button>Logout</button> : <button>Login</button>}</>;
};

export default App;
