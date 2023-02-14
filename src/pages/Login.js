import { useState } from "react";

function Login() {

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <div className="login-page">
          <h1>Sign In</h1>
          <form className="login-form">
            <label className="input-label" htmlFor="username">
              Username:{" "}
            </label>
            <input
              className="input_form"
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <br />
            <br />
            <label className="input-label" htmlFor="password">
              Password:{" "}
            </label>
            <input
              className="input_form"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </form>
          <br />
          <button className="button primary">Sign In</button>
          <br />
    </div>
  );
}

export default Login;
