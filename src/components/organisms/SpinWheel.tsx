import React from "react";
import wheel from "../../assets/images/wheel.png";
import pointer from "../../assets/images/pointer.png";
import { styled } from "@mui/material";

interface Props {
  isSpinning: boolean;
  spinDegree: number;
}

export const SpinWheel = ({ isSpinning, spinDegree }: Props) => {
  const RotatingImage = styled("img")({
    transform: "",
    animation: "spin 8s normal 0s forwards running",
    "@keyframes spin": {
      from: {
        transform: "rotate(0 deg)",
      },
      to: {
        transform: `rotate(${spinDegree + 360 * 30}deg)`,
      },
    },
    width: "350px",
    height: "330px",
  });

  return (
    <>
      {isSpinning ? (
        <RotatingImage src={wheel} alt="wheel" />
      ) : (
        <img
          src={wheel}
          alt="wheel"
          style={{
            width: "350px",
            height: "330px",
          }}
        />
      )}
      <img
        src={pointer}
        alt="pointer"
        style={{
          position: "absolute",
          width: "40px",
          height: "50px",
          top: "280px",
        }}
      />
    </>
  );
};
