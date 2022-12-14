import "./scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Contact from "./components/contact/Contact";
import Details from "./components/details/Details";
import Login from "./components/login/Login";
import Admin from "./components/admin/Admin";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

function App() {
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
      <Footer />
    </Router>
  );
}

export default App;
