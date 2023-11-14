import { Button, Grid, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import NoProducts from "../../components/no-products";
import CartItem from "../../components/cart-item";
import History from "../../components/history";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart.data);
  const totalPrice = useMemo(
    () => cart.reduce((total, product) => total + product.price, 0),
    [cart],
  );

  if (cart.length === 0) {
    return <NoProducts />;
  }
  return (
    <Stack spacing={6}>
      <History current="корзина" />
      <Typography>Товары в корзине на сумму: {totalPrice} $</Typography>
      <Link to="/order">
        <Button>Оформить заказ</Button>
      </Link>
      <Grid
        container
        spacing={1}
        flexWrap={true}
        alignItems={{ sm: "center" }}
        justifyContent={{ xs: "center", md: "flex-start" }}
      >
        {cart.map((product) => (
          <Grid item key={product.id}>
            <CartItem
              title={product.name}
              cover={product.cover}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
