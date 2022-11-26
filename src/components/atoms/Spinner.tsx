import { styled } from "@mui/material";
import React from "react";
import spinner from "../../assets/images/spinner.png";
import tspinner from "../../assets/images/tspinner.png";
import pspinner from "../../assets/images/pspinner.png";

const ResponsiveImg = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    width: "350px",
    height: "350px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "120px",
    height: "200px",
    display: "block",
    marginLeft: "-4em",
  },
  [theme.breakpoints.down("md")]: {
    height: "200px",
    width: "120px",
    display: "block",
    marginLeft: "-4em",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "80%",
    display: "block",
    marginLeft: "auto",
    marginRight: "5em",
  },
  [theme.breakpoints.down("xs")]: {
    width: "80%",
    height: "80%",
    display: "block",
    marginLeft: "auto",
    marginRight: "5em",
  },
}));

function Spinner() {
  return (
    <div>
      <picture>
        <source media="(min-width: 1200px)" srcSet={spinner}></source>
        <source media="(min-width: 600px)" srcSet={tspinner}></source>
        <ResponsiveImg src={pspinner} />
      </picture>
    </div>
  );
}

export default Spinner;
