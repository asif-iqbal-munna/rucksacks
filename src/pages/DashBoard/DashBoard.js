import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import RateReviewIcon from "@mui/icons-material/RateReview";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import PaymentIcon from "@mui/icons-material/Payment";
import useAuth from "../../hooks/useAuth";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Orders from "./Orders/Orders";
import Review from "./Review/Review";
import Pay from "./Pay/Pay";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import HomeIcon from "@mui/icons-material/Home";
import HandymanIcon from "@mui/icons-material/Handyman";
import ReorderIcon from "@mui/icons-material/Reorder";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ManageOrders from "./ManageOrders/ManageOrders";
import ManageProducts from "./ManageProducts/ManageProducts";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AddProduct from "./AddProduct/AddProduct";
import AdminRoute from "../authentication/Login/AdminRoute";

const drawerWidth = 250;

function DashBoard(props) {
  const { userSignOut, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon color="primary" />
          </ListItemIcon>
          <NavLink
            to={`${url}`}
            activeStyle={{
              color: "#961010",
            }}
            style={{ textDecoration: "none", color: " #000" }}
          >
            <ListItemText> My Orders</ListItemText>
          </NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <RateReviewIcon color="primary" />
          </ListItemIcon>
          <NavLink
            activeStyle={{
              color: "#961010",
            }}
            to={`${url}/review`}
            style={{ textDecoration: "none", color: " #000" }}
          >
            <ListItemText> Review</ListItemText>
          </NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PaymentIcon color="primary" />
          </ListItemIcon>
          <NavLink
            activeStyle={{
              color: "#961010",
            }}
            to={`${url}/pay`}
            style={{ textDecoration: "none", color: " #000" }}
          >
            <ListItemText> Pay</ListItemText>
          </NavLink>
        </ListItem>
        {admin && (
          <>
            <ListItem button>
              <ListItemIcon>
                <AdminPanelSettingsIcon color="primary" />
              </ListItemIcon>
              <NavLink
                activeStyle={{
                  color: "#961010",
                }}
                to={`${url}/makeadmin`}
                style={{ textDecoration: "none", color: " #000" }}
              >
                <ListItemText> Make Admin</ListItemText>
              </NavLink>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ShoppingBagIcon color="primary" />
              </ListItemIcon>
              <NavLink
                activeStyle={{
                  color: "#961010",
                }}
                to={`${url}/addproduct`}
                style={{ textDecoration: "none", color: " #000" }}
              >
                <ListItemText> Add A Product</ListItemText>
              </NavLink>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ReorderIcon color="primary" />
              </ListItemIcon>
              <NavLink
                activeStyle={{
                  color: "#961010",
                }}
                to={`${url}/manageorder`}
                style={{ textDecoration: "none", color: " #000" }}
              >
                <ListItemText> Manage All Orders</ListItemText>
              </NavLink>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HandymanIcon color="primary" />
              </ListItemIcon>
              <NavLink
                activeStyle={{
                  color: "#961010",
                }}
                to={`${url}/manageproduct`}
                style={{ textDecoration: "none", color: " #000" }}
              >
                <ListItemText> Manage Products</ListItemText>
              </NavLink>
            </ListItem>
          </>
        )}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon color="primary" />
          </ListItemIcon>
          <ListItemText onClick={userSignOut}>Log Out</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon color="primary" />
          </ListItemIcon>
          <Link to="/" style={{ textDecoration: "none", color: " #000" }}>
            <ListItemText> Home</ListItemText>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div">
            Rucksacks
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of Navlinks. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* DashBoard Routes */}
        <Switch>
          <Route exact path={`${path}`}>
            <Orders />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>
          <AdminRoute path={`${path}/manageorder`}>
            <ManageOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/manageproduct`}>
            <ManageProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/addproduct`}>
            <AddProduct />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
