const App = () => {
  const status = false;
  switch (status) {
    case true:
      return <button>Logout</button>;
    case false:
      return <button>Login</button>;
    default:
      return null;
  }
};

export default App;
