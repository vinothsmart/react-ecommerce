import { useState } from "react";

const App = () => {
  const [formData, setFromData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    gender: "",
  });

  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
        />
        <select name="city" value={formData.city}>
          <option value="">Choose City</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <input
          checked={formData.gender === "male"}
          type="radio"
          name="gender"
          value="male"
        />
        Male
        <input
          checked={formData.gender === "female"}
          type="radio"
          name="gender"
          value="female"
        />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
