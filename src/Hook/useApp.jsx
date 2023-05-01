import { useState } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const useApp = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const categories = [
    "Radio",
    "Audiovisuales",
    "Manifestación artística o teatral",
    "Prensa",
    "Fotografía",
  ];
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ color: "header.main", m: 2 }}>
        Laboratorio de cuerpo y subjetividades
      </Typography>
      <Divider />
      <List>
        {categories.map((category) => (
          <ListItem key={category}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return { mobileOpen, handleDrawerToggle, categories, drawer };
};

export { useApp };
