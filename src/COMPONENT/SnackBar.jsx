import React, { useState } from "react";
import { Alert, Snackbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SnackBar = (props) => {
  const navI = useNavigate();
  return (
    <Snackbar
      open={props.open}
      onClose={() => props.setOpen(false)}
      autoHideDuration={2000}
      message="Note archived"
      severity="error"
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      style={{ background: "#111111" }}
      onClick={() => navI(props.to)}
    >
      <Alert
        severity="success"
        style={{
          background: "#31ff77",
          boxShadow: "0px 0px 10px #31ff66",
          color: "#111111",
          fontFamily: "Poppins",
          fontWeight: "600",
          border: "2px solid #111111",
          outline: "2px solid #31ff66",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {props.message}
        <br />
        <small>
          <center>Tap to view</center>
        </small>
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
