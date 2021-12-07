import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/home";
import Narxlar from "./pages/narxlar";
import Solishtiruvpage from "./pages/solishtiruv";
import Brendlarpage from "./pages/brendlar";
import Video from "./pages/video";
import Model from "./pages/model";

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
              <Solishtiruvpage />
            </Route>
            <Route path="/brendlar" exact>
              <Brendlarpage />
            </Route>
            <Route path="/videolar" exact>
              <Video />
            </Route>
            <Route path="/model" exact>
              <Model />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
