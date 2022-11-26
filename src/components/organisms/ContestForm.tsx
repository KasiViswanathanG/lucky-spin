import React, { useState } from "react";
import { Grid, Typography, Checkbox } from "@mui/material";
import InputField from "../molecules/InputField";
import mail from "../../assets/images/mail.png";
import phone from "../../assets/images/phone.png";
import x from "../../assets/images/x.png";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { nextPage } from "../features/page";
import validator from "validator";

const ContestForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const validateEmail = () => {
    if (validator.isEmail(email)) {
      setEmailError(false);
      dispatch(nextPage());
    } else {
      setEmailError(true);
    }
  };
  return (
    <Grid container style={{ width: "350px" }} spacing={2}>
      <Grid item>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "25px",
            lineHeight: "35px",
            textAlign: "left",
          }}
        >
          This is how EngageBud looks like in action!
        </Typography>
      </Grid>
      <Grid item>
        <InputField
          image={mail}
          label="Email"
          variant="filled"
          width="17.9em"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          invalid={emailError}
        />
      </Grid>
      <Grid item>
        <InputField
          image={phone}
          label="Phone number"
          variant="filled"
          width="17.9em"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </Grid>
      <Grid item>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            display: "flex",
            width: "17.2em",
            padding: "5px",
          }}
        >
          <Checkbox sx={{ paddingTop: "2.5px" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{ fontWeight: "400", fontSize: "10px", textAlign: "left" }}
            >
              I agree to receiving recurring automated messages at the number I
              have provided.
            </Typography>
            <Typography
              sx={{ fontWeight: "400", fontSize: "10px", textAlign: "left" }}
            >
              Consent is not a condition to purchase.
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          sx={{ width: "285px", height: "50px" }}
          onClick={() => {
            validateEmail();
          }}
        >
          <Typography sx={{ fontWeight: "700" }}>Try your luck</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Typography sx={{ fontWeight: "300", fontSize: "6.7px" }}>
          *You can spin the wheel only once! *If you win, you can claim your
          coupon for 10 minutes only!
        </Typography>
      </Grid>
      <Grid item sx={{ display: "flex", margin: "-0.8em 0em 0em 9.4em" }}>
        <Button
          onClick={() => {
            setEmail("");
            setNumber("");
            setEmailError(false);
          }}
        >
          <Typography
            sx={{ fontWeight: "700", fontSize: "11px", color: "black" }}
          >
            No, I don’t feel lucky
          </Typography>
          <img
            style={{ width: "13px", height: "13px", marginLeft: "4px" }}
            src={x}
            alt="x"
          />
        </Button>
      </Grid>
    </Grid>
  );
};

export default ContestForm;
