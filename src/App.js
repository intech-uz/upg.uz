import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/home";
import Narxlar from "./pages/narxlar";
import Solishtiruv from "./Containers/Solishtiruv";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/narxlar" exact>
              <Narxlar />
            </Route>
            <Route path="/solishtiruv" exact>
              <Solishtiruv />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
