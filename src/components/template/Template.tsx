import React from "react";
import dtop from "../../assets/images/desktop-top.png";
import dbottom from "../../assets/images/desktop-bottom.png";
import ttop from "../../assets/images/ttop.png";
import tbottom from "../../assets/images/tbottom.png";
import ptop from "../../assets/images/ptop.png";
import pbottom from "../../assets/images/pbottom.png";
import { styled } from "@mui/material";
import bgpic from "../../assets/images/bgpic.png";

interface TemplateProps {
  children: any;
}

const ResponsiveDiv = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    backgroundImage: `url(${dtop}) , url(${dbottom}) `,
    backgroundColor: "#c6efc8",
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center top, center bottom",
  },
  [theme.breakpoints.down("lg")]: {
    backgroundImage: `url(${ttop}) , url(${tbottom}) `,
    backgroundColor: "#c6efc8",
    height: "100vh",
    width: "45%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center top, center bottom",
  },
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${ttop}) , url(${tbottom}) `,
    backgroundColor: "#c6efc8",
    height: "100vh",
    width: "45%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center top, center bottom",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundImage: `url(${ptop}) , url(${pbottom}) `,
    backgroundColor: "#c6efc8",
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center top, center bottom",
  },
  [theme.breakpoints.down("xs")]: {
    backgroundImage: `url(${ptop}) , url(${pbottom}) `,
    backgroundColor: "#c6efc8",
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center top, center bottom",
  },
}));

export const ResponsiveDiv2 = styled("div")(({ theme }) => ({
  [theme.breakpoints.between("md", "lg")]: {
    width: "40%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "40%",
  },
  [theme.breakpoints.between("sm", "xs")]: {
    width: "40%",
  },
}));

export const ResponsiveDiv3 = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "60%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "60%",
  },
  [theme.breakpoints.between("sm", "xs")]: {
    width: "60%",
  },
}));

function Template({ children }: TemplateProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgpic})`,
        height: "100vh",
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <ResponsiveDiv>{children}</ResponsiveDiv>
    </div>
  );
}

export default Template;
