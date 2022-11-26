import { Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../atoms/Button";
import { SpinWheel } from "../organisms/SpinWheel";
import Template from "../template/Template";
import { useDispatch } from "react-redux";
import { offerWon } from "../features/offer";
import { nextPage } from "../features/page";
import spin from "../../assets/audio/spin.mp3";
import won from "../../assets/audio/won.mp3";

const LuckySpin = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDegree, SetSpinDegree] = useState(0);
  const dispatch = useDispatch();

  const offers = {
    1: "30% SITEWIDE OFF",
    2: "BUY 1 GET 1 FREE",
    3: "FREE COFFEE MUG ON PURCHASE WORTH 1000+",
    4: "BUY 2 EFFERVESCENT TABLETS & GET 1 FREE",
    5: "FREE 50G TEA ON PURCHASE OF RS.500",
    6: "HOT CHOCOLATE WITH FREE TEA",
  };

  const spinAudio = new Audio(spin);
  const wonAudio = new Audio(won);
  const startSpin = () => {
    const newCouponNum = Math.floor(Math.random() * 6) + 1;
    const newSpinDegree = (360 / 6) * (6 - newCouponNum) + 60;
    SetSpinDegree(newSpinDegree);
    setIsSpinning(true);
    dispatch(offerWon(offers[newCouponNum as keyof typeof offers]));
    spinAudio.play();
    setTimeout(() => {
      dispatch(nextPage());
      wonAudio.play();
    }, 8500);
  };
  return (
    <Template>
      <div
        style={{
          paddingTop: "9em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SpinWheel isSpinning={isSpinning} spinDegree={spinDegree} />
        <Button
          variant="contained"
          sx={{ width: "120px", height: "50px", marginTop: "2em" }}
          onClick={() => {
            startSpin();
          }}
        >
          <Typography sx={{ fontWeight: "700" }}>SPIN</Typography>
        </Button>
      </div>
    </Template>
  );
};

export default LuckySpin;
