import Link from "next/link";
import { ButtonContainer } from "components/shared/button/buttonStyles";

interface ButtonProps {
  children: string | number;
  link: string;
}

const Button = ({ children, link }: ButtonProps): JSX.Element => {
  return (
    <Link href={link}>
      <ButtonContainer>{children}</ButtonContainer>
    </Link>
  );
};

export default Button;
