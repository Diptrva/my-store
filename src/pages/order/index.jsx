import React, { useEffect, useMemo, useState } from "react";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSetOrderAsync } from "../../store/order/async-actions";
import { clearCart } from "../../store/cart/action-creators";

export default function Order() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector((state) => state.order);

  const cart = useSelector((state) => state.cart.data);
  const totalPrice = useMemo(
    () => cart.reduce((total, product) => total + product.price, 0),
    [cart],
  );

  useEffect(() => {
    if (totalPrice === 0) {
      navigate("/");
    }
  }, [navigate, totalPrice]);

  useEffect(() => {
    if (order.success) {
      navigate("/");
      dispatch(clearCart());
    }
  }, [dispatch, navigate, order.success]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (name.trim() === "") {
      errors.name = "Имя обязательно";
    }

    if (address.trim() === "") {
      errors.address = "Адрес обязателен";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const data = {
        ...cart,
        name,
        address,
      };

      dispatch(fetchSetOrderAsync(data));
    }
  };

  return (
    <div className="order">
      <Paper elevation={3} className="order-container ">
        <Stack direction="column" spacing={3}>
          <Typography variant="h5">
            Вы оформляйте заказ на сумму: {totalPrice} $
          </Typography>
          <form onSubmit={handleSubmit} autoComplete="off">
            <Stack direction="column" spacing={3}>
              <TextField
                id="name"
                label="Имя"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                id="address"
                label="Адрес"
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                error={!!errors.address}
                helperText={errors.address}
              />
              <Button type="submit">
                {order.loading ? "Загрузка" : "Оформить заказ"}
              </Button>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </div>
  );
}
