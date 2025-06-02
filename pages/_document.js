import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className='scroll-smooth' lang='en'>
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4VNQ04006R"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4VNQ04006R');`
          }}
        />
      </Head>
      <body className='md:overflow-visible'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
