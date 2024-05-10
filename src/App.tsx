import store from "./store";
import { Provider } from "react-redux";
import RoutesConfig from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RoutesConfig />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
