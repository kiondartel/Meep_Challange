import store from "./store";
import { Provider } from "react-redux";
import RoutesConfig from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <RoutesConfig />
    </Provider>
  );
};

export default App;
