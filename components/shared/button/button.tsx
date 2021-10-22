import Link from "next/link";
import { ButtonContainer } from "components/shared/button/buttonStyles";

interface ButtonProps {
  children: string | number;
  link: string;
  dark?: boolean;
  outline?: boolean;
  block?: boolean;
  event?: () => void;
}

const Button = ({
  children,
  link,
  dark,
  outline,
  block,
  event,
}: ButtonProps): JSX.Element => {
  return (
    <Link href={link} passHref>
      <ButtonContainer
        dark={dark}
        outline={outline}
        block={block}
        onClick={event}
      >
        {children}
      </ButtonContainer>
    </Link>
  );
};

export default Button;
