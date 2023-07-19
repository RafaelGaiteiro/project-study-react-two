import { InputStylized } from "./styles";

interface IInputProps {
  id: string;
  placeholder: string;
}

export const Input = ({ ...props }: IInputProps) => {
  return <InputStylized {...props} />;
};
