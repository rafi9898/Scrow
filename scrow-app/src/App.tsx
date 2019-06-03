import React from "react";
import Installer from "./components/Layouts/Installer/Installer";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/installer" component={Installer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
