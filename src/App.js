import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import AllEmployee from "./components/AllEmployee";
import About from "./components/About";
import Header from "./components/Header";
import EditEmployee from "./components/EditEmployee";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllEmployee />} />
        <Route path="/allemployee" element={<AllEmployee />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/editemployee/:id" element={<EditEmployee />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
