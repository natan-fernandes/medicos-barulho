interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem = (props: NavItemProps) => {
  return (
    <li className='float-left text-lg'>
      <a href={props.href} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0">
        {props.text}
      </a>
    </li>
  );
}