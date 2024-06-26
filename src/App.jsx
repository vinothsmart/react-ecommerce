import { useRef } from "react";

const App = () => {
  let firstNameRef,
    lastNameRef = useRef();

  const handleClick = () => {
    const firstName = firstNameRef.value;
    const lastName = lastNameRef.value;
    alert(firstName + " " + lastName);
  };

  return (
    <>
      <input
        type="text"
        ref={(a) => (firstNameRef = a)}
        placeholder="FirstName"
      />
      <br />
      <input
        type="text"
        ref={(a) => (lastNameRef = a)}
        placeholder="LastName"
      />{" "}
      <br />
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default App;
