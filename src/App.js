import "./App.css";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { BrowserRouter as Router } from "react-router-dom";

const store = ConfigureStore();

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Main />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
