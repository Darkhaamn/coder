import Head from 'next/head';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <>
      <Head>
        <title>Oblako.dev CV</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
