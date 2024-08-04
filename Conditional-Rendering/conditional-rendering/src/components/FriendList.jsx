import PropTypes from "prop-types";
import Friend from "./Friend";
export default function FriendList({ listItems }) {
  return (
    <>
      <ul className="list-group">
        {listItems.map((item, index) => (
          <Friend key={index} friendItem={item} />
        ))}
      </ul>
    </>
  );
}
// Define PropTypes for the ErrorMessage component
FriendList.propTypes = {
  listItems: PropTypes.array.isRequired,
};
