import { Button, Container, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Container component="main">
      <Typography component="h2" variant="h2">
        404
      </Typography>
      <Typography variant="subtitle1">Страница не найдена</Typography>
      <Button variant="contained" color="primary" href="/">
        Вернуться на главную
      </Button>
    </Container>
  );
}
