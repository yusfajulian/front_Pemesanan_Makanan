import axios from "axios";
import React, { useState, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onChangeUser = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const onChangePass = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const klikLogin = () => {
    const data = {
      username: username,
      password: password
    };
    axios.post("https://localhost:5001/api/login", data).then((result) => {
      if (result) {
        localStorage.setItem("token", result.data.token);
        setRedirect(true);
      }
    });
  };

  return (
    <Fragment>
      {redirect && <Redirect to="/dashboard" />}
      <div style={{ marginTop: "145px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card p-4">
                <div className="card-body">
                  <div style={{ textAlign: "center", marginBottom: "10px" }}>
                    <h2 className="text-primary">Login</h2>
                  </div>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder="Username..."
                      className="form-control"
                      value={username}
                      onChange={onChangeUser}
                    />
                  </div>

                  <div className="form-group" style={{ margin: "15px 0" }}>
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Password..."
                      className="form-control"
                      value={password}
                      onChange={onChangePass}
                    />
                  </div>

                  <button className="btn btn-primary" onClick={klikLogin}>
                    Login
                  </button>
                  <div className="form-group" style={{ margin: "15px 0" }}>
                    {/* <label><a href="Daftar">Daftar</a></label> */}
                    <Link to="/daftar">Daftar</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
