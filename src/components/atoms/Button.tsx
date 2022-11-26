import { styled } from "@mui/material/styles";
import { Button as MUIButton, ButtonProps } from "@mui/material";

const StyledButton = styled(MUIButton)({
  textTransform: "none",
  borderRadius: "25px",
});

interface IButtonProps extends ButtonProps {}

const Button = ({ children, ...rest }: IButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
