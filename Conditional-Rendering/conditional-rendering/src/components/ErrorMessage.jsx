import PropTypes from "prop-types";
function ErrorMessage({ listItems }) {
  return (
    <>
      {listItems.length === 0 && <h3>I do not have any friends</h3>}
      {/* Method 1: */}
      {/* {listItems.length === 0 ? <h2>I don't have friends</h2> : null} */}
    </>
  );
}

// Define PropTypes for the ErrorMessage component
ErrorMessage.propTypes = {
  listItems: PropTypes.array.isRequired,
};

export default ErrorMessage;
