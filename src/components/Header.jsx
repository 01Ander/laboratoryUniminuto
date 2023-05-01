import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  ThemeProvider,
  Typography,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../mui/theme";
import { useApp } from "../Hook/useApp";
import Navbar from "./Navbar";

const Header = () => {
  const { mobileOpen, handleDrawerToggle, categories, drawer } = useApp();

  const drawerWidth = 250;

  return (
    <ThemeProvider theme={theme}>
      <AppBar component="nav">
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Laboratorio de cuerpo y subjetividades
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {categories.map((item) => (
              <Button key={item} variant="text" color="text">
                {item}
              </Button>
            ))}
          </Box>
          <TextField
            sx={{
              my: 1,
            }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          ></TextField>
          <Navbar
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
            drawer={drawer}
            drawerWidth={drawerWidth}
          />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
