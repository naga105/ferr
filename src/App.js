import "./App.css";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { ConfigureStore } from "./reducer/configureStore";
import { BrowserRouter as Router } from "react-router-dom";
const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
