import { Badge, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

import "./index.css";
import { Link } from "react-router-dom";

export default function Header() {
  const cart = useSelector((state) => state.cart.data);

  return (
    <header className="header">
      <Grid container justifyContent="space-between" flexDirection="row">
        <Grid item alignItems="center" justifyContent="center">
          <Link to="/">
            <Typography variant="h3" sx={{ fontSize: 24 }}>
              MyStore
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/cart">
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </Grid>
      </Grid>
    </header>
  );
}
