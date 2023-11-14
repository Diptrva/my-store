import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function CartItem({ cover = "", title = "", price = 0 }) {
  return (
    <Stack direction="column" justifyContent="center" spacing={2}>
      <img src={cover} alt="cover" height={300} />
      <Typography component="h4" variant="h4" textAlign="center">
        {title}
      </Typography>
      <Typography variant="body1" textAlign="center">
        Цена: {`${price} $`}
      </Typography>
    </Stack>
  );
}
