import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="custom-screen">
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div>
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-600">
                <span>
                  <img
                    src="/img/logo.svg"
                    alt="FormEasily"
                    width="32"
                    height="32"
                    className="w-8"
                  />
                </span>
                <span>FormEasily</span>
              </Link>
            </div>
            <div className="max-w-md mt-4 text-gray-600">
              Professional Hong Kong company registration services. We help businesses establish and grow in Hong Kong with expert guidance and comprehensive support.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {["Home", "Services", "About", "Contact"].map((item, index) => (
                <Link 
                  key={index} 
                  href="/"
                  className="w-full px-4 py-2 text-gray-600 rounded-md hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-50 focus:outline-none"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Services</h3>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {["Company Registration", "Business License", "Banking Setup", "Compliance"].map((item, index) => (
                <Link 
                  key={index} 
                  href="/"
                  className="w-full px-4 py-2 text-gray-600 rounded-md hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-50 focus:outline-none"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <div className="mt-4 space-y-4">
              <p className="text-gray-600">
                <span className="font-medium">Email:</span><br />
                info@formeasily.com
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span><br />
                +852 XXXX XXXX
              </p>
              <div className="flex mt-5 space-x-5">
                <a href="#" target="_blank" rel="noopener" className="text-gray-400 hover:text-indigo-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener" className="text-gray-400 hover:text-indigo-600">
                  <span className="sr-only">WeChat</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.328.328 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .718-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.856-2.578.215-4.972 2.342-6.166 2.127-1.194 4.968-1.036 6.764.356 1.796 1.392 2.322 3.61 1.363 5.497-.96 1.888-3.368 3.037-5.772 2.662-.856-.133-1.655-.43-2.352-.85-.19.21-.406.403-.64.566-1.26.89-2.804 1.392-4.437 1.392-4.8 0-8.691-3.288-8.691-7.342 0-4.054 3.891-7.342 8.691-7.342zM5.786 7.222c-.718 0-1.3.582-1.3 1.3 0 .718.582 1.3 1.3 1.3.718 0 1.3-.582 1.3-1.3 0-.718-.582-1.3-1.3-1.3zm6.428 0c-.718 0-1.3.582-1.3 1.3 0 .718.582 1.3 1.3 1.3.718 0 1.3-.582 1.3-1.3 0-.718-.582-1.3-1.3-1.3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 mt-10 text-sm text-center text-gray-600 border-t border-gray-100">
          Copyright © {new Date().getFullYear()} FormEasily. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 