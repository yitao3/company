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
    message: "",
    services: []
  });

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("aD4Pcfs8DNCraiaWX");
  }, []);

  const servicesItems = [
    "Mobile development",
    "UI/UX Design",
    "web development",
    "SEO",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const now = new Date();
    const time = now.toLocaleString();

    const templateParams = {
      title: "New submission",
      name: formData.name,
      time: time,
      message: `Email: ${formData.email}\nSelected Services: ${formData.services.join(", ")}\nMessage: ${formData.message}`,
      email: "yintaonk@qq.com"
    };

    try {
      await emailjs.send('service_r1mot3b', 'template_k2fne55', templateParams);
      alert('Message sent successfully!');
      setFormData({ name: "", email: "", message: "", services: [] });
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <>
      <Head>
        <title>Contact us - Blinder</title>
      </Head>
      <div className='pt-28 pb-12'>
        <div className='custom-screen text-gray-600'>
          <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
            <div className='max-w-lg sm:text-center lg:text-left'>
              <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Talk to a Blinder expert
              </h1>
              <p className='mt-3'>
                We are here to help. Get in touch with sales our press team and
                let us know how we can help, or shoot us an email on{" "}
                <a
                  href='mailto:support@blinder.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-indigo-600 hover:text-indigo-400 font-medium duration-150'>
                  support@blinder.com.
                </a>
              </p>
            </div>
            <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
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
                <div>
                  <label className='text-gray-700'>Services</label>
                  <ul className='mt-3 space-y-2'>
                    {servicesItems.map((item, idx) => (
                      <li key={idx}>
                        <Checkbox
                          id={`service-${idx}`}
                          label={item}
                          checked={formData.services.includes(item)}
                          onChange={() => handleServiceChange(item)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  type='submit'
                  className='w-full text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800'>
                  Send message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
