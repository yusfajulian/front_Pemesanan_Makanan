import React from "react";
import Login from "./components/Login";
import Daftar from "./components/Daftar";
import Dashboard from "./components/Dashboard";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Login />
        </Route> */}
        <Route path="/daftar" component={Daftar} />
        {/* <Daftar />
        </Route> */}
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}
export default App;
