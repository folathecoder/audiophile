import Link from "next/link";
import { ButtonContainer } from "components/shared/button/buttonStyles";

interface ButtonProps {
  children: string | number;
  link: string;
  dark?: boolean;
}

const Button = ({ children, link, dark }: ButtonProps): JSX.Element => {
  return (
    <Link href={link} passHref>
      <ButtonContainer dark={dark}>{children}</ButtonContainer>
    </Link>
  );
};

export default Button;
