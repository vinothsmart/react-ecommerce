import PropTypes from "prop-types";

const UserForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Choose City</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <input
          checked={formData.gender === "male"}
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        Male
        <input
          checked={formData.gender === "female"}
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

UserForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default UserForm;
