import React from "react";
import {
  InputAdornment,
  TextField,
  FilledTextFieldProps,
  Typography,
} from "@mui/material";

interface InputFieldProps extends FilledTextFieldProps {
  image?: string;
  label?: string;
  width?: string;
  invalid?: boolean;
}

function InputField({
  image,
  label,
  width,
  invalid,
  ...rest
}: InputFieldProps) {
  return (
    <TextField
      {...rest}
      sx={{
        "input:: -webkit-inner-spin-button": {
          "-webkit-appearance": "none",
        },
        "& .MuiFilledInput-root": {
          backgroundColor: "#ffffff",
        },
        "& .MuiFilledInput-root.Mui-focused": {
          backgroundColor: "#ffffff",
        },
        width: { width },
      }}
      color="primary"
      variant="filled"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" style={{ paddingBottom: "12px" }}>
            <img
              src={image}
              alt="mail"
              style={{ height: "15px", width: "20px", paddingRight: "12px" }}
            />
            <Typography
              variant="body2"
              sx={{
                padding: "10px 0px 40px 40px",
                position: "absolute",
                fontWight: "400",
                color: "#49454F",
              }}
            >
              {label}
            </Typography>
            {invalid && (
              <Typography
                sx={{
                  padding: "40px 0px 10px 150px",
                  position: "absolute",
                  fontWight: "400",
                  color: "red",
                  fontSize: "10px",
                }}
              >
                * Enter valid {label}
              </Typography>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
}

export default InputField;
