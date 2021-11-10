import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home/Home";
import Shop from "./pages/Shop/Shop";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReviewOrder from "./pages/ReviewOrder/ReviewOrder";
import OrderProduct from "./pages/OrderProduct/OrderProduct";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

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

theme.typography.h5 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
};
theme.typography.h4 = {
  fontSize: "1.1rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
};
theme.typography.h3 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.2rem",
  },
};
theme.typography.h2 = {
  fontSize: "1.8rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};
theme.typography.h1 = {
  fontSize: "1.8rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
};

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
          <Route path="/product/:id">
            <OrderProduct />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
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
