const App = () => {
  const handleSumbit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSumbit}>
        <input type="text" name="firstName" placeholder="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <select name="city">
          <option value="">Choose City</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <input type="radio" name="gender" value="male" /> Male
        <input type="radio" name="gender" value="female" /> Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
