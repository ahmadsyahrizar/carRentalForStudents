import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import SearchCar from "./pages/SearchCar"
import DetailCar from "./pages/DetailCar"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/cari-mobil" component={SearchCar} />
        <Route exact path="/cari-mobil/:carName" component={DetailCar} />
        {/* <Route path="/not-found" component={NotFound} /> */}
      </Switch>
    </Router>
  )
}


export default App
