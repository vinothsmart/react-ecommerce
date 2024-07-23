import { useCallback } from "react";
import { useState } from "react";
import UserForm from "./component/UserForm";

const App = () => {
  const [formData, setFromData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    gender: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFromData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formData);
    },
    [formData]
  );

  return (
    <UserForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default App;
