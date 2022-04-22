import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';


const Meta = () => {
  const router = useRouter();

  return (
    <Head>
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-EVPN0ZBQ5V'
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EVPN0ZBQ5V', { page_path: window.location.pathname });
            `,
        }}
      />
      <DefaultSeo
        titleTemplate='Data Driven Dao | %s'
        defaultTitle='Data Driven Dao'
        description='DAO Analytics for every DAO: Analyze any DAO with data from Twitter, Snapshot, Discord, on-chain token data, and many more data points.'
        openGraph={{
          title: 'Data Driven Dao',
          description: 'DAO Analytics for every DAO: Analyze any DAO with data from Twitter, Snapshot, Discord, on-chain token data, and many more data points.',
          type: 'website',
          locale: 'en_US',
          url: `https://www.datadrivendao.xyz${router.pathname}`,
          site_name: 'Data Driven Dao',
          images: [
            {
              url: `https://www.datadrivendao.xyz/undraw_dao.svg`,
              alt: 'Data Driven Dao Website',
            },
          ],
        }}
        twitter={{
          handle: '@cryptoneur_eth',
          site: '@cryptoneur_eth',
          cardType: 'summary_large_image',
        }}
      />
    </Head>
  )
}

export default Meta