import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("aD4Pcfs8DNCraiaWX");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const now = new Date();
    const time = now.toLocaleString();

    const templateParams = {
      title: "New submission",
      name: formData.name,
      time: time,
      message: `Email: ${formData.email}\nMessage: ${formData.message}`,
      email: "yintaonk@qq.com"
    };

    try {
      await emailjs.send('service_r1mot3b', 'template_k2fne55', templateParams);
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact us - FormEasily</title>
      </Head>
      <div className='pt-36 pb-12 min-h-[90vh]'>
        <div className='custom-screen text-gray-600 mt-20'>
          <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
            <div className='max-w-lg sm:text-center lg:text-left'>
              <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Talk to a FormEasily expert
              </h1>
              <p className='mt-3'>
                Leave our friendly team a message and we'll be in touch in no time.
              </p>
              <div className="mt-8 space-y-6 text-left">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0">
                    <img src="/icons/money.svg" alt="No Hidden Fees" className="w-8 h-8" />
                  </span>
                  <div>
                    <div className="font-bold text-gray-800">No Hidden Fees</div>
                    <div className="text-gray-600 text-sm">Enjoy clear and transparent pricing with absolutely no hidden charges or unexpected costs.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0">
                    <img src="/icons/rocket_launch_24dp_ 4B5563.svg" alt="Fast & Simple" className="w-8 h-8" />
                  </span>
                  <div>
                    <div className="font-bold text-gray-800">Fast & Simple</div>
                    <div className="text-gray-600 text-sm">Complete your company registration in just 30 minutes, with a straightforward and hassle-free process.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0">
                    <img src="/icons/support_agent_24dp_ 4B5563.svg" alt="Remote Processing" className="w-8 h-8" />
                  </span>
                  <div>
                    <div className="font-bold text-gray-800">Remote Processing</div>
                    <div className="text-gray-600 text-sm">There's no need to be physically present; the entire process can be efficiently handled remotely from start to finish.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16">
                  <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <div className="text-2xl font-bold text-gray-800 mb-2">Thank you for your submission</div>
                  <div className="text-gray-600 text-center">Our account manager will contact you soon</div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className='space-y-5 font-medium'>
                  <div>
                    <label>Full name</label>
                    <Input
                      aria-label='Full name'
                      type='text'
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className='mt-2 focus:border-indigo-600'
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <Input
                      aria-label='Email'
                      type='email'
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className='mt-2 focus:border-indigo-600'
                    />
                  </div>
                  <div>
                    <label>Message</label>
                    <textarea
                      aria-label='Message'
                      required
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'></textarea>
                  </div>
                  <Button
                    type='submit'
                    className='w-full text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800'>
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
