import Heading from '@/components/Heading';
import styles from '../styles/MainPage.module.css';

const MainPage = () => {
  return (
    <>
      <Heading title={'Tokens Board'} keywords={'MainPage'} />
      <main className={styles.main}>
        <h1>Main Page</h1>
      </main>
    </>
  );
};

export default MainPage;
