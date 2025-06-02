import Head from "next/head";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function CNCompany() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does it take to register a company in Mainland China?",
      answer: "The entire process typically takes 15-20 working days, including company name approval, document preparation, and registration with the local Administration for Market Regulation (AMR)."
    },
    {
      question: "What are the requirements for registering a company in China?",
      answer: "The main requirements include: at least one legal representative, registered capital (varies by industry), a registered office address, and necessary business licenses depending on your industry."
    },
    {
      question: "Do I need to be physically present in China to register a company?",
      answer: "While physical presence is not always required, some steps may need in-person attendance. We can help you navigate the process and minimize the need for physical presence."
    },
    {
      question: "What are the ongoing compliance requirements?",
      answer: "After registration, companies need to maintain proper accounting records, file annual reports, and comply with tax regulations. We provide comprehensive compliance support services."
    },
    {
      question: "Can foreigners own a company in China?",
      answer: "Yes, foreigners can own companies in China through various structures such as WFOE (Wholly Foreign-Owned Enterprise) or Joint Ventures, depending on your business needs and industry restrictions."
    }
  ];

  return (
    <>
      <Head>
        <title>China Company Registration - FormEasily</title>
        <meta name="description" content="Professional Mainland China company registration services" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="custom-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
                Mainland China Company Registration Made Easy
              </h1>
              <p className="mt-4 text-gray-600">
                Start your business journey in Mainland China with our comprehensive company registration services. We handle all the paperwork while you focus on growing your business.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/get-started"
                  className="px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/get-started"
                  className="px-6 py-3 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="lg:text-right">
              <img
                src="/img/hero.png"
                alt="China Business"
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="custom-screen">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Why Choose Mainland China?
            </h2>
            <p className="mt-4 text-gray-600">
              Mainland China offers numerous advantages for businesses looking to establish a presence in Asia.
            </p>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 gap-8">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/img/benefit-one.png"
                  alt="Strategic Location"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="space-y-8 pt-16 pb-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">More Reasons to Choose Hong Kong</h2>
                <p className="mt-2 text-gray-600">Explore additional advantages that make Hong Kong a premier destination for your business expansion.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Huge Market Potential
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Access to the world's largest consumer market with over 1.4 billion people and growing middle class.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Manufacturing Hub
                  </h3>
                  <p className="mt-2 text-gray-600">
                    World-class manufacturing capabilities, supply chain infrastructure, and skilled workforce.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Government Support
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Various incentives and support programs for foreign investment in key industries and regions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 gap-8">
            <div className="space-y-8 pt-16 pb-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">More Reasons to Choose Hong Kong</h2>
                <p className="mt-2 text-gray-600">Explore additional advantages that make Hong Kong a premier destination for your business expansion.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Digital Economy
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Leading digital infrastructure and innovation ecosystem with advanced e-commerce and mobile payment systems.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Skilled Workforce
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Access to a large pool of educated professionals with technical expertise and industry experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Belt and Road Initiative
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Opportunities to participate in China's global infrastructure and economic development projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/img/benefit-two.png"
                  alt="Business Environment"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="custom-screen">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600">
              We offer a comprehensive range of services to help you establish and grow your business in Mainland China.
            </p>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Company Registration",
                description: "Complete company registration process including WFOE, Joint Venture, or Representative Office setup.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: "Business License",
                description: "Assistance with obtaining necessary business licenses and permits for your specific industry.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Banking Setup",
                description: "Guidance on setting up corporate bank accounts with major banks in China.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
              },
              {
                title: "Compliance",
                description: "Ongoing support with regulatory compliance, including annual reports and tax filings.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
              },
              {
                title: "Tax Planning",
                description: "Strategic tax planning and optimization to ensure compliance with Chinese tax regulations.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Virtual Office",
                description: "Professional business address and mail handling services for your China company.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-gray-100 hover:border-indigo-600 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="custom-screen">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">
              Find answers to common questions about Mainland China company registration.
            </p>
          </div>
          <div className="mt-16 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0"
              >
                <button
                  className="flex items-center justify-between w-full py-4 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="custom-screen">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Get Started with FormEasily Today
            </h2>
            <p className="mt-4 text-gray-600">
              Register your business effortlessly with expert support. Follow industry best practices, eliminate complexities, and launch on time with our seamless registration process for Hong Kong and Mainland China.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/get-started"
                className="px-8 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 