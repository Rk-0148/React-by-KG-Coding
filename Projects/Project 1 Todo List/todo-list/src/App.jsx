import HeroesSection from "./components/HeroesSection";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TodoItems from "./components/TodoItems";
import "../src/App.css";
function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "03/08/2024" },
    { name: "Buy car", dueDate: "13/08/2024" },
    { name: "Buy Bike", dueDate: "23/08/2024" },
    { name: "Buy Mobile", dueDate: "03/09/2024" },
    { name: "Sell Notes", dueDate: "04/08/2024" },
  ];
  return (
    <>
      <Navbar />
      <HeroesSection />
      <AddTask />
      <TodoItems todoItems={todoItems}></TodoItems>
    </>
  );
}

export default App;
