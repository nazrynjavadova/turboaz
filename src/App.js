import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Turboaz from "./components/turboaz";
import Newpage from "./components/newpage";



import CarDetails from "./components/CarDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Turboaz />} />
        <Route path="/add-car" element={<Newpage />} />

        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
