import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Navbar.module.scss';

const navigation = [
  { id: 1, title: 'Main', path: '/' },
  { id: 2, title: 'Tokens', path: '/tokens' },
  { id: 3, title: 'TokenPem', path: '/tokenPem' },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div
        className={styles.logo}
        onClick={() => {
          router.push('/');
        }}
      >
        <Image src="/favicon_pem.png" width={40} height={40} alt="pem" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => {
          return (
            <Link href={path} key={id} legacyBehavior>
              <a className={router.pathname === path ? styles.active : null}>
                {title}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
