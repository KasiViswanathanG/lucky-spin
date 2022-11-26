import React from "react";
import Spinner from "../atoms/Spinner";
import ContestForm from "../organisms/ContestForm";
import Template from "../template/Template";
import { styled } from "@mui/material";

export const ResponsiveDiv = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  [theme.breakpoints.down("lg")]: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "60%",
  },
  [theme.breakpoints.down("xs")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "60%",
  },
}));

export const ResponsiveIDiv = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    paddingLeft: "5em",
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "5em",
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: "5em",
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: "2em",
  },
  [theme.breakpoints.up("xs")]: {
    marginLeft: "2em",
  },
}));

const EnterContest = () => {
  return (
    <Template>
      <ResponsiveDiv>
        <Spinner />
        <ResponsiveIDiv>
          <ContestForm />
        </ResponsiveIDiv>
      </ResponsiveDiv>
    </Template>
  );
};

export default EnterContest;
