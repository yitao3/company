import Head from "next/head"
import Navbar from "./ui/Navbar"
import Footer from "./ui/Footer"

const Layout = ({ children, title = "FormEasily" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content='FormEasily makes business registration easy and transparent for Hong Kong and Mainland China.' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
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
                <img src="/icons/WhatsApp.svg" alt="WhatsApp" style={{ width: 32, height: 32 }} />
            </a>
        </>
    )
}

export default Layout