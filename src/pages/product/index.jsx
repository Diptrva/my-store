import { Button, Chip, Grid, Skeleton, Stack, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchProductAsync } from "../../store/product/async-actions";
import {
  removeItemFromCart,
  setItemInCart,
} from "../../store/cart/action-creators";
import History from "../../components/history";

import "./index.css";

export default function Product() {
  const params = useParams();
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.data);
  const isLoading = useSelector((state) => state.product.loading);

  const itemInCart = useMemo(
    () => cart.some((item) => item.id === params.id),
    [cart, params.id],
  );

  const addToCart = useCallback(() => {
    if (itemInCart) {
      dispatch(removeItemFromCart(product));
    } else {
      dispatch(setItemInCart(product));
    }
  }, [dispatch, itemInCart, product]);

  useEffect(() => {
    dispatch(fetchProductAsync(params.id));
  }, [dispatch, params.id]);

  if (isLoading) {
    return (
      <Grid
        container
        spacing={1}
        direction={{ sm: "column", md: "row" }}
        justifyContent="space-around"
        flexWrap={true}
      >
        <Grid item>
          <Stack spacing={3} direction="column">
            <Skeleton variant="rectangular" width={278} height={20} />
            <Skeleton variant="rectangular" width={278} height={20} />
            <Skeleton variant="rectangular" width={278} height={20} />
            <Skeleton variant="rectangular" width={278} height={20} />
          </Stack>
        </Grid>
        <Grid item>
          <Skeleton variant="rectangular" width={300} height={500} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Stack spacing={5}>
      <History current={product.name} />
      <Grid
        container
        columnSpacing={{ sm: 0, md: 5 }}
        rowSpacing={{ sm: 4, md: 0 }}
        flexWrap={true}
        justifyContent="center"
        direction={{ sm: "column", md: "row" }}
      >
        <Grid item sm>
          <Stack spacing={{ sm: 5, md: 2 }}>
            <Typography variant={{ sm: "h2", md: "h1" }} gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
          </Stack>
        </Grid>
        <Grid item sm rowSpacing={{ sm: 5 }}>
          <div>
            <img src={product.cover} alt="product" />
          </div>
          <Stack spacing={2} direction="row">
            <Button
              variant={itemInCart ? "outlined" : "contained"}
              onClick={addToCart}
            >
              {itemInCart ? "Убрать из корзины" : "В корзину"}
            </Button>
            <Chip color="primary" label={`${product.price} $`} />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
