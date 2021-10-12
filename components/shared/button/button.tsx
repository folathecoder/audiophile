import Link from "next/link";
import { ButtonContainer } from "components/shared/button/buttonStyles";

interface ButtonProps {
  children: string | number;
  link: string;
  dark?: boolean;
  outline?: boolean;
}

const Button = ({
  children,
  link,
  dark,
  outline,
}: ButtonProps): JSX.Element => {
  return (
    <Link href={link} passHref>
      <ButtonContainer dark={dark} outline={outline}>
        {children}
      </ButtonContainer>
    </Link>
  );
};

export default Button;
