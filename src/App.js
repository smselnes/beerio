import "./scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Contact from "./components/contact/Contact";
import Details from "./components/details/Details";
import Login from "./components/login/Login";
import Admin from "./components/admin/Admin";
import AuthContext, { AuthProvider } from "./context/AuthContext";
import { useContext } from "react";
import Navigation from "./components/layout/Navigation";

function App() {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <Router>
      <Navigation />

      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/detail/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
