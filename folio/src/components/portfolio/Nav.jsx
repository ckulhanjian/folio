const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#coursework', label: 'Coursework' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

function Nav() {
  return (
    <nav className="nav">
      <a className="nav-logo" href="#about">Cara Kulhanjian</a>
      <ul className="nav-links">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
