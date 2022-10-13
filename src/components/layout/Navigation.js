import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import navImage from "../../../src/beerio2.jpg";

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }

  return (
    <header
      style={{
        backgroundImage: `url(${navImage})`,
        backgroundPosition: "inherit",
      }}
    >
      <h1 className="logo">Beerio</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        {auth ? (
          <>
            <Link to="/admin">Admin</Link>
            <button className="logoutBtn" onClick={logout}>
              Log out
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>{" "}
    </header>
  );
}

export default Navigation;
