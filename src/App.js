import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/"> Home </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button className="logOutBtn" onClick={signUserOut}>
              {" "}
              Log Out
            </button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/ReactJs-Blog-Website/" element={<Home isAuth={isAuth} />} />
        <Route path="/ReactJs-Blog-Website/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/ReactJs-Blog-Websitelogin" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
