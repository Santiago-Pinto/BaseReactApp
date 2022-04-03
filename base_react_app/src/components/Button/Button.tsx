import { StyledButton } from "./ButtonStyles";

export const Button = (props: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <StyledButton
      onClick={() => {
        props.onClick();
      }}
    >
      {props.children}
    </StyledButton>
  );
};
