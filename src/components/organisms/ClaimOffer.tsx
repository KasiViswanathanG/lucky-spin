import React from "react";
import { Grid, Typography, Button as MUIButton } from "@mui/material";
import { useSelector } from "react-redux";
import Button from "../atoms/Button";

function ClaimOffer() {
  const offer = useSelector((state: any) => state.offer.offer);
  return (
    <Grid container style={{ width: "350px" }} spacing={2}>
      <Grid item>
        <Typography
          variant="h6"
          sx={{ fontWeight: "800", marginBottom: "0.5em", textAlign: "center" }}
        >
          Congrats! You Won:
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", textAlign: "center" }}
        >
          {offer}
        </Typography>
      </Grid>
      <Grid item>
        <div
          style={{
            width: "300px",
            height: "69px",
            backgroundColor: "#a2c3a4",
            marginLeft: "0.5em",
            borderRadius: "0.6em",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "700", color: "#ffffff", marginLeft: "0.5em" }}
          >
            XAXPDF20
          </Typography>
          <MUIButton
            variant="contained"
            sx={{ height: "69px" }}
            onClick={() => {
              navigator.clipboard.writeText("XAXPDF20");
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "800" }}>
              COPY
            </Typography>
          </MUIButton>
        </div>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          sx={{ width: "285px", height: "50px", marginLeft: "1em" }}
          onClick={() => {
            navigator.clipboard.writeText("XAXPDF20");
          }}
        >
          <Typography sx={{ fontWeight: "700" }}>Close Panel & Copy</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Typography
          sx={{ fontSize: "9px", fontStyle: "italic", marginLeft: "11em" }}
          color="primary"
        >
          *You can claim your coupon for 10 minutes only!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ClaimOffer;
