import { useAuth } from "../../utils/useAuth";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

const Navbar = ({ isNoteArchived, handleArchived }) => {
  const { logout } = useAuth();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            noWrap
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            Awesome Notes
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="current user options"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  handleArchived();
                }}
              >
                <Typography textAlign="center">
                  {isNoteArchived ? "My Notes" : "Archived"}
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  logout();
                }}
              >
                <Typography textAlign="center">Log Out</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            component="div"
            noWrap
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: "flex", md: "none" },
            }}
          >
            Awesome Notes
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                handleArchived();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {isNoteArchived ? "My Notes" : "Archived"}
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                logout();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Log Out
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
