import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Button, Container } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { user, userSignOut } = useAuth();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>{user?.name}</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem disableRipple onClick={handleMenuClose}>
        <NavLink
          style={{
            color: " #000",
            fontWeight: "bold",
            textDecoration: "none",
            paddingBottom: "5px",
            borderBottom: "2px solid transparent",
          }}
          activeStyle={{
            color: "#fcc39d",
            fontWeight: "bold",
            borderBottom: "2px solid #fcc39d",
          }}
          to="/shop"
        >
          Shop
        </NavLink>
      </MenuItem>
      <MenuItem disableRipple onClick={handleMenuClose}>
        <NavLink
          style={{
            color: " #000",
            fontWeight: "bold",
            textDecoration: "none",
            paddingBottom: "5px",
          }}
          activeStyle={{
            color: "#fcc39d",
            fontWeight: "bold",
          }}
          to="/revieworder"
        >
          Review Order
        </NavLink>
      </MenuItem>
      {!user.email && (
        <MenuItem>
          <Link style={{ textDecoration: "none" }} to="/login">
            <Button
              color="secondary"
              onClick={userSignOut}
              variant="contained"
              size="small"
            >
              Sign In
            </Button>
          </Link>
        </MenuItem>
      )}
      {user?.email && (
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                noWrap
                component="div"
                color="secondary"
                sx={{ fontWeight: "bold" }}
              >
                rucksacks
              </Typography>
            </NavLink>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <MenuItem disableRipple onClick={handleMenuClose}>
                <NavLink
                  style={{
                    color: " #fff",
                    fontWeight: "bold",
                    textDecoration: "none",
                    paddingBottom: "5px",
                    borderBottom: "2px solid transparent",
                  }}
                  activeStyle={{
                    color: "#fcc39d",
                    fontWeight: "bold",
                    borderBottom: "2px solid #fcc39d",
                  }}
                  to="/shop"
                >
                  Shop
                </NavLink>
              </MenuItem>
              <MenuItem disableRipple onClick={handleMenuClose}>
                <NavLink
                  style={{
                    color: " #fff",
                    fontWeight: "bold",
                    textDecoration: "none",
                    paddingBottom: "5px",
                    borderBottom: "2px solid transparent",
                  }}
                  activeStyle={{
                    color: "#fcc39d",
                    fontWeight: "bold",
                    borderBottom: "2px solid #fcc39d",
                  }}
                  to="/revieworder"
                >
                  Review Order
                </NavLink>
              </MenuItem>
              <MenuItem>
                <Link style={{ textDecoration: "none" }} to="/login">
                  <Button
                    color="secondary"
                    onClick={userSignOut}
                    variant="contained"
                    size="small"
                  >
                    Sign In
                  </Button>
                </Link>
              </MenuItem>
              {user?.email && (
                <Button
                  color="secondary"
                  onClick={userSignOut}
                  variant="outlined"
                  size="small"
                >
                  Sign Out
                </Button>
              )}
              {user?.email && (
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Header;
