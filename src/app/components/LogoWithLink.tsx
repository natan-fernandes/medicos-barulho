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
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={props.iconPath}
        alt={props.alt}
        width={props.width ?? 30}
        height={props.height ?? 30}
      />
    </a>
  );
}
