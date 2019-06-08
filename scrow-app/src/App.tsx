import React from "react";
import Installer from "./components/Layouts/Installer/Installer";
import Home from "./components/Pages/Home/Home";
import SignIn from "./components/Pages/SignIn/SignIn";
import SignUp from "./components/Pages/SignUp/SignUp";
import Profile from "./components/Pages/Profile/Profile";
import EditProfile from "./components/Pages/EditProfile/EditProfile";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/installer" component={Installer} />
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/edit-profile" component={EditProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
