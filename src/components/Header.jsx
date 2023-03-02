
import { AppBar, Toolbar, Typography } from "@mui/material";
const Header = () => {
  return (
    <AppBar position="static" className="bg-blue-500">
      <Toolbar>
        <Typography variant="h6" className="text-white">
          CoinMarketCap
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
