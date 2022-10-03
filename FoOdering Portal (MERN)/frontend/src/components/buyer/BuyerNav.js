import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BuyNav = () => {
  const buynavigate = useNavigate();
  const onLogout = () => {localStorage.setItem("email",""); buynavigate("/")} ;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => buynavigate("/")}
          >
            BUYERS UI
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => buynavigate("/buyer/profile")}>
            EDIT
          </Button>
          <Button color="inherit" onClick={() => buynavigate("/buyer/dashboard")}>
            DASHBOARD
          </Button>
          <Button color="inherit" onClick={() => buynavigate("/buyer/wallet")}>
            WALLET
          </Button>
          <Button color="inherit" onClick={() => buynavigate("/buyer/order")}>
            MY ORDERS
          </Button>
          <Button color="inherit" onClick={onLogout}>
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BuyNav;