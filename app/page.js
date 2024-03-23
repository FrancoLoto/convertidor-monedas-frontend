
import Head from 'next/head';
import BannerTop from '../src/components/banners/bannerTop';
import CoinList from '../src/components/home/CoinList';


export default function Home() {
  

  return (
    <div>
      <div>
        <Head>
          <title>ZonaDefi</title>
          <meta name="description" content="Sitio web dedicado a las finanzas" />
          
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

          
        </Head>
      </div>
      <BannerTop />
      <CoinList />
    </div>
  );
}
