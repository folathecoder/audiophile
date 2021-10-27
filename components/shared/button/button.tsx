import Link from "next/link";
import { ButtonContainer } from "components/shared/button/buttonStyles";

interface ButtonProps {
  children: string | number;
  link: string;
  dark?: boolean;
  outline?: boolean;
  block?: boolean;
  event?: () => void;
  event1?: () => void;
  event2?: () => void;
}

const Button = ({
  children,
  link,
  dark,
  outline,
  block,
  event,
  event1,
  event2,
}: ButtonProps): JSX.Element => {
  return (
    <Link href={link} passHref>
      <ButtonContainer
        dark={dark}
        outline={outline}
        block={block}
        onClick={event || event1 || event2}
      >
        {children}
      </ButtonContainer>
    </Link>
  );
};

export default Button;
