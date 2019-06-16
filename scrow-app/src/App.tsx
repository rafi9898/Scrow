import React from "react";
import Installer from "./components/Layouts/Installer/Installer";
import Home from "./components/Pages/Home/Home";
import SignIn from "./components/Pages/SignIn/SignIn";
import SignUp from "./components/Pages/SignUp/SignUp";
import Profile from "./components/Pages/Profile/Profile";
import EditProfile from "./components/Pages/EditProfile/EditProfile";
import ItemDetails from "./components/Pages/ItemDetails/ItemDetails";
import Payment from "./components/Pages/Payment/Payment";
import PaymentSuccess from "./components/Pages/PaymentSuccess/PaymentSuccess";
import MyOrders from "./components/Pages/MyOrders/MyOrders";
import AdminHome from "./components/Pages/AdminPanel/AdminHome";
import AddOffer from "./components/Pages/AdminPanel/AddOffer";
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
          <Route path="/offer/:id" component={ItemDetails} />
          <Route path="/payment/:id" component={Payment} />
          <Route path="/payment-success" component={PaymentSuccess} />
          <Route path="/my-orders" component={MyOrders} />
          <Route path="/admin-panel" component={AdminHome} />
          <Route path="/admin-add-offer" component={AddOffer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
