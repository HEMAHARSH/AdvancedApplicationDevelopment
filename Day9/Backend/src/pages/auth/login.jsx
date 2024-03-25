import { useRef, useState } from "react";
import "../../assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

function LoginFinal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const dispatch = useDispatch();

 const navigate = useNavigate();
  const [loginmsg, setLoginmsg] = useState("Welcome you again!");


 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setLoginmsg("Please enterusername and password");
      document.getElementById("login_msg").style.color = "red";
    }else if (password.length < 8) {
      setLoginmsg("Password should have atleast length 8");
      document.getElementById("login_msg").style.color = "red";
    } 
     else if(username !=="admin" && password !=="admin@123"){
      setLoginmsg("Login successful");
      document.getElementById("login_msg").style.color = "green";
       dispatch(login(username));
      navigate("/");
    }
    else{
      dispatch(login(username));
      navigate("/admin/dashboard");
    }
  }

  return (
    <div id="complete1">
      <div id="text_container">
        <p id="newtext">
          New User?
          <button id="newUser">
          <Link to="/register" style={{ textDecoration: "none" }}>
            Register
          </Link>
          </button>
          </p>
          <p id="text_text">
          We believe in efforts.
          <br />
          Customize gifts for your loved ones.
        </p>
      </div>
      <div id="login_container">
        <button id="closebutton">
          <b><Link to="/" style={{textDecoration:"none"} }>X</Link></b>
        </button>
        <div id="login_box">
          <h1 id="login_title">Login</h1>

          <p id="login_msg">{loginmsg}</p>
          <form id="login_form">
          <div id="textmsg">Username</div>
            <input
            type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              id="email"
              />
            <br />
            <div id="textmsg">Password</div>
            <input
              type="password"
              value={password}
             onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              id="password"
            />
            <button id="login_btn" type="button" onClick={handleSubmit}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginFinal;
