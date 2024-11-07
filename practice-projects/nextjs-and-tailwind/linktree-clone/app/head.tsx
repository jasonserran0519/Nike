import Head from 'next/head';

export default function HTMLHead() {
    return (
        <Head>
            <title>Linktree</title>
            <meta name="description" content="Next.js & TailwindCSS" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width-device-width, initial-scale=1" />
        </Head>
    );
  }