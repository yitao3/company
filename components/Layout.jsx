import Head from "next/head"
import Navbar from "./ui/Navbar"
import Footer from "./ui/Footer"
import { useRouter } from 'next/router';
import Image from "next/image";

const Layout = ({ children, title = "FormEasily", description = "FormEasily makes business registration easy and transparent for Hong Kong and Mainland China.", ogImage = "/img/og-default.jpg" }) => {
    const router = useRouter();
    const siteUrl = 'https://www.formeasily.com';
    const canonicalUrl = siteUrl + (router.asPath === '/' ? '' : router.asPath);
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : siteUrl + ogImage} />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : siteUrl + ogImage} />
                {/* Canonical */}
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            {/* Organization 结构化数据，仅首页注入 */}
            {router.pathname === '/' && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "FormEasily",
                        "url": "https://www.formeasily.com/",
                        "logo": "https://www.formeasily.com/formeasily.png",
                        "contactPoint": [{
                            "@type": "ContactPoint",
                            "telephone": "+86-18817598672",
                            "contactType": "customer service",
                            "areaServed": "HK, CN",
                            "availableLanguage": ["English", "Chinese"]
                        }],
                        "sameAs": [
                            "https://www.linkedin.com/company/formeasily/"
                        ]
                    })
                }} />
            )}
            <Navbar />
            <main>{children}</main>
            <Footer />
            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/8618817598672"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: 'fixed',
                    right: '2rem',
                    bottom: '2rem',
                    zIndex: 1000,
                    background: '#25D366',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    transition: 'box-shadow 0.2s',
                }}
                aria-label="Chat on WhatsApp"
            >
                <Image src="/icons/WhatsApp.svg" alt="WhatsApp" width={32} height={32} style={{ width: 32, height: 32 }} />
            </a>
        </>
    )
}

export default Layout