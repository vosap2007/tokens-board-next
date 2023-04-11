import Head from 'next/head';

const Heading = ({ title, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon_pem.png" />
      <meta keywords={`Tokens Board` + keywords}></meta>
    </Head>
  );
};

export default Heading;
