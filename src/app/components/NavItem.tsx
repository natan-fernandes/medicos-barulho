import Link from "next/link";

interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem = (props: NavItemProps) => {
  return (
    <li className='float-left'>
      <Link href={props.href} className="block py-2 px-3 text-amber-600 rounded hover:text-sky-400 md:hover:text-sky-400 md:border-0 md:hover:text-red-600 md:p-0 uppercase transition duration-300">
        {props.text}
      </Link>
    </li>
  );
}