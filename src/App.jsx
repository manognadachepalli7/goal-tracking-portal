import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Employee from "./pages/Employee";
import Manager from "./pages/Manager";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;