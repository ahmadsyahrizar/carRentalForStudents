import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import SearchCar from "./pages/SearchCar"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/cari-mobil" component={SearchCar} />
        {/* <Route path="/detail-mobil" component={CarDetail} /> */}
        {/* <Route path="/not-found" component={NotFound} /> */}
      </Switch>
    </Router>
  )
}


export default App
