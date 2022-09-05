import * as S from "./Button.styles";

export interface ButtonProps {
  color?: string;
}

export default function Button(props: ButtonProps) {
  return <S.ButtonWrapper color={props.color}></S.ButtonWrapper>;
}
