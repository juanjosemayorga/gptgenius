import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [
  { href: '/chat', label: 'chat' },
  { href: '/tours', label: 'tours' },
  { href: '/tours/new-tour', label: 'new tour' },
  { href: '/profile', label: 'profile' },
];

export const NavLinks = () => {
  return (
    <ul className='menu text-base-content'>
      {links.map(({ href, label }) => {
        return (
          <li key={href}>
            <Link href={href} className='capitalize'>
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  )
}
