import PropTypes from "prop-types";
import ShowTask from "./ShowTask";
export default function TodoItems({ todoItems }) {
  return (
    <>
      {todoItems.map((item) => (
        <ShowTask
          key={item.id}
          TaskName={item.name}
          TaskDate={item.dueDate}
        ></ShowTask>
      ))}
    </>
  );
}
TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};
