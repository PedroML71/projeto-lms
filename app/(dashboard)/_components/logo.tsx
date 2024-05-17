import { FC } from "react";
import Image from "next/image";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return <Image height={130} width={130} alt="logo" src="/logo.svg" />;
};

export default Logo;
