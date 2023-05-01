import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <TextField
      sx={{
        m: 1,
        width: "100%",
        maxWidth: "240px",
      }}
      InputProps={{
        endAdornment: (
          <IconButton>
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
  );
};

export default SearchBar;
