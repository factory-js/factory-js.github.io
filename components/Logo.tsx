import Image from "next/image";

type Props = {
  width: number;
  height: number;
  alt: string;
};

export const Logo = ({ width, height, alt }: Props) => {
  return (
    <>
      <Image
        src="/logo-light.svg"
        className="dark:hidden"
        width={width}
        height={height}
        alt={alt}
      />
      <Image
        src="/logo-dark.svg"
        className="hidden dark:block"
        width={width}
        height={height}
        alt={alt}
      />
    </>
  );
};
