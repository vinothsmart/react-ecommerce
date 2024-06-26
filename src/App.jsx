const App = () => {
  const myHeadline = document.getElementById("myHeadline");
  myHeadline.innerHTML = "Hello World!";
  return (
    <>
      <h1 id="myHeadline"></h1>
    </>
  );
};

export default App;
