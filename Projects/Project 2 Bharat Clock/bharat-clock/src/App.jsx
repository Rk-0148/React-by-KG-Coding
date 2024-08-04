import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Features from "./components/Features";
import Clock from "./components/Clock";
function App() {
  return (
    <>
      <center>
        <Navbar></Navbar>
        <Heading></Heading>
        <Clock></Clock>
        <Features></Features>
      </center>
    </>
  );
}

export default App;
