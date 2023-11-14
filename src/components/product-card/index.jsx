import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

import "./index.css";

export default function ProductCard({
  title = "",
  cover = "",
  price = 0,
  id = "",
}) {
  return (
    <Link to={`/product/${id}`} relative="path">
      <Paper elevation={3} className="product-card">
        <Typography>{title}</Typography>
        <img src={cover} className="product-card__cover" alt="cover" />
        <Chip
          color="primary"
          label={`${price} $`}
          className="product-card__price"
        />
      </Paper>
    </Link>
  );
}
