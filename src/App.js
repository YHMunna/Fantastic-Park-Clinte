import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";
import Menubar from "./Components/Menubar/Menubar";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import SingleService from "./Components/SingleService/SingleService";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import WaterRide from "./Components/waterRide/WaterRide";
import Resort from "./Components/Resort/Resort";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute exact path="/services/:id">
            <SingleService></SingleService>
          </PrivateRoute>
          <PrivateRoute exact path="/waterRide">
            <WaterRide></WaterRide>
          </PrivateRoute>
          <PrivateRoute exact path="/resort">
            <Resort></Resort>
          </PrivateRoute>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
