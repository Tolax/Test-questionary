import "./App.css";
import Questions from "./Components/Questions";
import { Provider } from "react-redux";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <Questions />
      </div>
    </Provider>
  );
}

export default App;
