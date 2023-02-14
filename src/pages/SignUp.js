import { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <div className="sign-up-page">
        <section className="login-form">
          <h1>Sign Up</h1>
          <form className="signup-form">
          <label className="sign-up__input-label" htmlFor="firstname">
              First name:*{" "}
            </label>
            <input
              className="sign-up__input_form"
              type="text"
              id="firstname"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label className="sign-up__input-label" htmlFor="lastname">
            Last name:*{" "}
          </label>
          <input
            className="sign-up__input_form"
            type="text"
            id="lastname"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label className="sign-up__input-label" htmlFor="email">
              Email:*{" "}
            </label>
            <input
              className="sign-up__input_form"
              type="text"
              id="email"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label className="sign-up__input-label" htmlFor="username">
              Username:*{" "}
            </label>
            <input
              className="sign-up__input_form"
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label className="sign-up__input-label" htmlFor="password">
              Password:*{" "}
            </label>
            <input
              className="sign-up__input_form"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </form>
          <br />
          <button className="button primary sign-up__button">Sign up</button>
        </section>
    </div>
  );
}

export default Login;
