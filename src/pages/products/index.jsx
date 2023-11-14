import { Alert, Grid, Skeleton, Snackbar } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../components/product-card";
import { fetchProductsAsync } from "../../store/products/async-actions";
import { resetOrder } from "../../store/order/action-creators";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.loading);
  const orderSuccess = useSelector((state) => state.order.success);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(resetOrder());
  };

  if (isLoading) {
    return (
      <Grid
        container
        spacing={1}
        direction="row"
        flexWrap={true}
        justifyContent="center"
      >
        <Grid item>
          <Skeleton variant="rectangular" width={278} height={215} />
        </Grid>
        <Grid item>
          <Skeleton variant="rectangular" width={278} height={215} />
        </Grid>
        <Grid item>
          <Skeleton variant="rectangular" width={278} height={215} />
        </Grid>
        <Grid item>
          <Skeleton variant="rectangular" width={278} height={215} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={1} flexWrap={true} justifyContent="center">
      {products.map((product) => (
        <Grid item key={product.id}>
          <ProductCard
            title={product.name}
            cover={product.cover}
            price={product.price}
            id={product.id}
          />
        </Grid>
      ))}
      <Snackbar
        open={orderSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Ваш заказ успешно оформлен
        </Alert>
      </Snackbar>
    </Grid>
  );
}
