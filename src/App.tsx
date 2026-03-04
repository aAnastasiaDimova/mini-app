import { HashRouter } from "react-router-dom";
import { MyEventsProvider } from "./context/MyEventsContext";
import { UserProvider } from "./context/UserContext";
import { AppRoutes } from "./router/routes";
// import { ThemeProvider } from "../context/ThemeContext";

function App() {
  return (
    <UserProvider>
      <MyEventsProvider>
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </MyEventsProvider>
    </UserProvider>
  );
}

export default App;
