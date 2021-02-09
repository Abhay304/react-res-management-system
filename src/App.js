import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Headers from "./component/Headers";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Headers />
      </div>
    </Provider>
  );
}

export default App;
