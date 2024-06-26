const App = () => {
  const status = false;
  if (status) {
    return (
      <>
        <h1>Login Status</h1>
        <button>Logout</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Login Status</h1>
        <button>Login</button>
      </>
    );
  }
};

export default App;
