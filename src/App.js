import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchCar from "./pages/SearchCar";
import DetailCar from "./pages/DetailCar";
import Example from "./pages/Example";
import SignIn from "./pages/SignIn";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/home" component={Home} />
          <Route exact path="/cari-mobil" component={SearchCar} />
          <Route exact path="/cari-mobil/:carId" component={DetailCar} />
          <Route exact path="/example" component={Example} />
          <Route exact path="/signin" component={SignIn} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
