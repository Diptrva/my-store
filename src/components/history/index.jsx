import { HomeRepairServiceOutlined } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function History({ current = "" }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/">
        <Typography color="text.secondary">
          <HomeRepairServiceOutlined sx={{ mr: 0.5 }} fontSize="inherit" />
          Все товары
        </Typography>
      </Link>
      <Typography color="text.primary">{current}</Typography>
    </Breadcrumbs>
  );
}
