import PropTypes from "prop-types";

const ItemList = ({ list }) => {
  return (
    <table>
      <tbody>
        {list.length !== 0 ? (
          list.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>
                <button>Remove</button>
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
};

export default ItemList;
