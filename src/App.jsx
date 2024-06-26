import { useRef } from "react";

const App = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const handleClick = () => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    alert(firstName + " " + lastName);
  };

  return (
    <>
      <input type="text" ref={firstNameRef} placeholder="FirstName" /> <br />
      <input type="text" ref={lastNameRef} placeholder="LastName" /> <br />
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default App;
