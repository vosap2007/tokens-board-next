import { useRouter } from 'next/router.js';
import { useEffect } from 'react';
import styles from '../styles/404.module.scss';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <h1>Error - 404</h1>
      <h2>Something is going wrong...</h2>
      <h2>Please try again later.</h2>
    </div>
  );
};

export default Error;
