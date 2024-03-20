import { useRef, useState } from "react";
import "../../assets/css/register.css"
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
function Register() {
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const nav= useNavigate();
  const [loginmsg, setLoginmsg] = useState("Be our member");

  function handlesubmit() {
    console.log("clicked");
    if (email.current.value === "" ||username.current.value === ""|| password.current.value === "") {
      setLoginmsg("Please enter the fields");
      document.getElementById("login_msg").style.color = "red";
    } else {
      setLoginmsg("Registered successful");
      nav("/login");
      document.getElementById("login_msg").style.color = "green";
    }
  }

  return (
    <div>
      <div id="text_containerr">
        <p id="text_textr">
          Hello, We would love to connect with you.<br />
          Customize your gifts for your loved ones at best quality.
        </p>
      </div>
      <div id="login_containerr">
      <button id="closebuttonn">
      <b><Link to="/" style={{textDecoration:"none"} }>X</Link></b>
    </button>
        <div id="login_boxr">
          <h1 id="login_titler">Register</h1>
          <p id="login_msgr">{loginmsg}</p>
          <form id="login_formr">
            <div id="textmsgr">Username</div>
            <input
              type="username"
              ref={username}
              placeholder="Enter your name"
              id="email"
            />
            <br />
            <div id="textmsgr">Email id</div>
            <input
              type="email"
              ref={email}
              placeholder="Enter your email"
              id="email"
            />
            <br />
            <div id="textmsgr">Password</div>{" "}
            <input
              type="password"
              ref={password}
              placeholder="Enter your password"
              id="password"
            />
            <button id="login_btnr" type="button" onClick={handlesubmit}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
