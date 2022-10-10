import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      {auth ? (
        <>
          <Link to="/admin">Admin</Link>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
      {/* <Link to="/login">Login</Link>
          <Link to="/admin">Admin</Link> */}
    </nav>
  );
}

export default Navigation;
