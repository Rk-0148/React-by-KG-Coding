import PropTypes from 'prop-types';

export default function Friend(props) {
  return (
    <>
      <li className="list-group-item">
        {props.friendItem}
      </li>
    </>
  );
}

// Add PropTypes validation
Friend.propTypes = {
  friendItem: PropTypes.string.isRequired
};