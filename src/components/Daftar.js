import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Daftar = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [alert, setAlert] = useState("");

  const onChangeUser = (e) => {
    const value = e.target.value;
    setUsername(value);
    console.log(value);
  };

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    console.log(value);
  };

  const onChangePass = (e) => {
    const value = e.target.value;
    setPassword(value);
    console.log(value);
  };

  const onChangeType = (e) => {
    const value = e.target.value;
    setType(value);
    console.log(value);
  };

  const klikDaftar = () => {
    const data = {
      username: username,
      password: password,
      email: email,
      type: type
    };
    // console.log(data);
    axios
      .post("https://localhost:5001/api/CreateAkun", data)
      .then((result) => {
        if (result) {
          if (result.data) {
            setUsername("");
            setPassword("");
            setEmail("");
            setType("");
            setAlert(result.data.message);
            setTimeout(() => {
              setAlert("");
            }, 3000);
          }
        }
      })
      .catch((e) => {
        console.log("Re-check your data");
      });
    // .catch((e) => {
    //   console.log("error", e.response.data.message);
    // });
  };

  return (
    <div style={{ marginTop: "120px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              <div className="card-body">
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                  <h2 className="text-primary">Daftar</h2>
                </div>
                {alert && (
                  <div className="alert alert-primary">
                    <p>{alert}</p>
                  </div>
                )}
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
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email..."
                    className="form-control"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password..."
                    className="form-control"
                    value={password}
                    onChange={onChangePass}
                  />
                </div>
                <div className="form-group" style={{ margin: "0 0 15px 0" }}>
                  <label>Type</label>
                  <input
                    type="text"
                    placeholder="Type..."
                    className="form-control"
                    value={type}
                    onChange={onChangeType}
                  />
                </div>
                <button className="btn btn-primary" onClick={klikDaftar}>
                  Daftar
                </button>
                <Link
                  to="/"
                  className="btn btn-warning"
                  style={{ marginLeft: "10px" }}
                >
                  Batal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
