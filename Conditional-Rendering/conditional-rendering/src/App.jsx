import "./App.css";
import FriendList from "./components/FriendList";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // let listItems = [];
  let listItems = [
    "Rohan Kadam",
    "Aakash Kanchan",
    "Mrunal Kadam",
    "Akanksha Deshpande",
    "Yash Dhumal",
    "Kunal Jadhav",
    "Gaurav Bagal",
  ];
  return (
    <>
      <div>
        <h3>List of Friends</h3>
        <ErrorMessage listItems={listItems} />
        <FriendList listItems={listItems} />
      </div>
    </>
  );
}

export default App;
