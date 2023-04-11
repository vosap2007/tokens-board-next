import Heading from '@/components/Heading';
import styles from '../styles/MainPage.module.scss';

const MainPage = () => {
  return (
    <>
      <Heading title={'Tokens Board'} keywords={'MainPage'} />
      <main className={styles.wrapper}>
        <h1>Main Page</h1>
      </main>
    </>
  );
};

export default MainPage;
