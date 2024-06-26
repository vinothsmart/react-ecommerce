const App = () => {
  const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
  return (
    <>
      <ul>
        {cities.map((city, index) => (
          <li key={index.toString()}>{city}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
