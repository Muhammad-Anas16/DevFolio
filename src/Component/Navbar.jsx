import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Sun icon
import DarkModeIcon from "@mui/icons-material/DarkMode"; // Moon icon
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../Redux/theme/themeSlice";

const pages = ["Home", "Skills", "Projects", "Contact Me"];

function Navbar({ setScroll }) {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  const toggleTheme = () => {
    dispatch(setTheme(mode === "light" ? "dark" : "light"));
  };

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (page) => {
    setScroll(page);
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        zIndex: 1100,
        backgroundColor: "rgba(0, 0, 0, 0.4)", // semi-transparent black
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontFamily: "monospace",
            }}
          >
            {"< M-Anas />"}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontFamily: "monospace",
            }}
          >
             {"< M-Anas />"}
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 3 }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavClick(page)}
                sx={{
                  my: 2,
                  color: "inherit",
                  display: "block",
                  textTransform: "none",
                  fontWeight: "bold",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    background: "#FF0055",
                    color: "white",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Tooltip title="Toggle theme">
            <IconButton
              onClick={toggleTheme}
              sx={{
                ml: 2,
                backgroundColor: "#9BE8FF",
                "&:hover": {
                  backgroundColor: "#7dd8f5",
                },
              }}
            >
              {mode === "light" ? (
                <WbSunnyIcon sx={{ color: "#FFED8A" }} />
              ) : (
                <DarkModeIcon sx={{ color: "#ffffff" }} />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
