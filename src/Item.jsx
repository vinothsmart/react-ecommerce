const Item = ({ list }) => {
  return (
    <>
      {list.map((o, i) => (
        <p key={i}>{o}</p>
      ))}
    </>
  );
};

export default Item;
