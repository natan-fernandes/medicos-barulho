import Image from 'next/image';

interface LogoWithLinkProps {
  iconPath: string;
  href: string;
  alt: string;
  width?: number;
  height?: number;
}

export const LogoWithLink = (props: LogoWithLinkProps) => {
  return (
    <a
      href={props.href}
      className=""
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={props.iconPath}
        alt={props.alt}
        width={props.width ?? 20}
        height={props.height ?? 10}
      />
    </a>
  );
}
