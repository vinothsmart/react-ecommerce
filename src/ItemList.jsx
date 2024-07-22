import PropTypes from "prop-types";

const ItemList = ({ list, handleRemove }) => {
  return (
    <table>
      <tbody>
        {list.length !== 0 ? (
          list.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>
                <button onClick={handleRemove(index)}>Remove</button>
              </td>
            </tr>
          ))
        ) : (
          <tr></tr>
        )}
      </tbody>
    </table>
  );
};

ItemList.propTypes = {
  list: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ItemList;
