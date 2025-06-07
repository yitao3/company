import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-500 text-sm">
      <div className="custom-screen">
        <div className="grid max-w-screen-xl grid-cols-1 gap-y-8 gap-x-12 pt-8 mx-auto mt-5 border-t border-gray-100 lg:grid-cols-4 text-left">
          {/* Company Info */}
          <div className="min-w-[180px]">
            <div>
              <Link href="/" className="flex items-center space-x-2 text-lg font-semibold text-indigo-600">
                <span>
                  <Image
                    src="/formeasily.png"
                    alt="Formeasily logo"
                    width={120}
                    height={40}
                    style={{ maxHeight: 40, objectFit: "contain" }}
                  />
                </span>
              </Link>
            </div>
            <div className="max-w-md mt-3 text-xs text-gray-400">
              Professional Hong Kong company registration services. We help businesses establish and grow in Hong Kong with expert guidance and comprehensive support.
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-[160px]">
            <h3 className="text-base font-semibold text-gray-700 mb-2">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: "Get Started", href: "/get-started" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-[180px]">
            <h3 className="text-base font-semibold text-gray-700 mb-2">Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Register Company in Hong Kong", href: "/register-company-hong-kong" },
                { name: "Register Company in Mainland China", href: "/register-company-chinese-mainland" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="hover:text-indigo-600 transition-colors whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="min-w-[180px]">
            <h3 className="text-base font-semibold text-gray-700 mb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <span className="font-medium text-gray-600">Email:</span> info@formeasily.com
              </li>
              <li>
                <span className="font-medium text-gray-600">Phone:</span> +852 6421 5778
              </li>
              <li>
                <span className="font-medium text-gray-600">Address:</span><br />
                12th Floor, 100 Nathan Road,<br />
                Mong Kok, Kowloon,<br />
                Hong Kong
              </li>
            </ul>
            <div className="flex mt-4 space-x-4">
              <a href="#" target="_blank" rel="noopener" className="text-gray-400 hover:text-indigo-600">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener" className="text-gray-400 hover:text-indigo-600">
                <span className="sr-only">WeChat</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.328.328 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .718-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.856-2.578.215-4.972 2.342-6.166 2.127-1.194 4.968-1.036 6.764.356 1.796 1.392 2.322 3.61 1.363 5.497-.96 1.888-3.368 3.037-5.772 2.662-.856-.133-1.655-.43-2.352-.85-.19.21-.406.403-.64.566-1.26.89-2.804 1.392-4.437 1.392-4.8 0-8.691-3.288-8.691-7.342 0-4.054 3.891-7.342 8.691-7.342zM5.786 7.222c-.718 0-1.3.582-1.3 1.3 0 .718.582 1.3 1.3 1.3.718 0 1.3-.582 1.3-1.3 0-.718-.582-1.3-1.3-1.3zm6.428 0c-.718 0-1.3.582-1.3 1.3 0 .718.582 1.3 1.3 1.3.718 0 1.3-.582 1.3-1.3 0-.718-.582-1.3-1.3-1.3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 mt-8 text-xs text-center text-gray-400 border-t border-gray-100">
          Copyright © {new Date().getFullYear()} FormEasily. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 