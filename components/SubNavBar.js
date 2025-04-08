'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SubNavBar.module.css';

export default function SubNavBar() {
  const pathname = usePathname();

  const subNavLinks = [
    { href: '/profile', label: 'Details' },
    { href: '/profile/settings', label: 'Settings' },
    { href: '/profile/posts', label: 'Posts' },
  ];

  return (
    <nav className={styles.subNav}>
      {subNavLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}