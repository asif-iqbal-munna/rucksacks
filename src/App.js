import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home/Home";
import Shop from "./pages/Shop/Shop";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReviewOrder from "./pages/ReviewOrder/ReviewOrder";

const theme = createTheme({
  palette: {
    primary: {
      main: "#961010",
    },
    secondary: {
      main: "#fcc39d",
    },
  },
  typography: {
    fontSize: 16,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/revieworder">
            <ReviewOrder />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
