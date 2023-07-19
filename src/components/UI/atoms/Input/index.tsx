import { InputStylized } from "./styles";

interface IInputProps {
  id: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
}

export const Input = ({ ...props }: IInputProps) => {
  return <InputStylized {...props} />;
};
