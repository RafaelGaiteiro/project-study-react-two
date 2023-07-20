import { InputStylized } from "./styles";
import { forwardRef } from "react";

interface IInputProps {
  id?: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return <InputStylized ref={ref} {...props} />;
});
