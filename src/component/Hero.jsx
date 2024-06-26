const Hero = (props) => {
  return (
    <>
      <h1>{props.item.name}</h1>
      <h2>{props.item.age}</h2>
      <h3>{props.item.city}</h3>
    </>
  );
};

export default Hero;
