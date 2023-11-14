import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NoProducts() {
  return (
    <Stack>
      <Typography component="h2" variant="h2">
        У вас нет товаров в корзине
      </Typography>
      <div>
        <Button variant="outlined" color="primary">
          <Link to="/">К списку товаров</Link>
        </Button>
      </div>
    </Stack>
  );
}
