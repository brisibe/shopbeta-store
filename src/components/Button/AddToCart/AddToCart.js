import { Button } from "../Button";

export const AddToCart = ({ children, clickHandler, ...props }) => {
  return (
    <Button
      backgroundColor="yellow.500"
      color="white"
      {...props}
      onClick={clickHandler}
    >
      {children}
    </Button>
  );
};
