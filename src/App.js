import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/home";
import Million from "./pages/million";
import Bravo from "./pages/bravo";
import Qvz from "./pages/qvz";
import UzbekKonsert from "./pages/uzbkonsert";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/million" exact>
              <Million />
            </Route>
            <Route path="/bravo" exact>
              <Bravo />
            </Route>
            <Route path="/qvz" exact>
              <Qvz />
            </Route>
            <Route path="/uzbekKonsert" exact>
              <UzbekKonsert />
            </Route>
            <Route path="/posts" exact>
              <Million />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
