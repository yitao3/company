import SectionWrapper from "../../SectionWrapper"

const Testimonials = () => {

    const testimonials = [
        {
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Alex Wonderson",
            title: "Founder of Lyconf",
            quote: "As a small business owner, I was doing everything and my workload was increasing. With FormEasily, I was able to save time so I could focus on the things that matter most: my clients and my family."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Sophie Lee",
            title: "CEO of VisionTech",
            quote: "FormEasily made the entire company registration process in Hong Kong so smooth and fast. The transparency in pricing and the expert support gave me peace of mind. Now I can focus on growing my business with confidence."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/65.jpg",
            name: "Mark Thompson",
            title: "Founder of GreenTech Solutions",
            quote: "Setting up my business in Mainland China seemed daunting at first, but FormEasily made it so simple. Their team handled everything remotely, and I didn't have to leave my office. A true game-changer for global expansion!"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            name: "Emma Zhang",
            title: "Founder of ZenStudio",
            quote: "I'm so glad I chose FormEasily for registering my business in Hong Kong. The process was incredibly fast, and the team was there for me every step of the way. They made a complicated process feel effortless."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/77.jpg",
            name: "David Miller",
            title: "Co-Founder of EcoWorld",
            quote: "I needed to expand my business into China quickly, and FormEasily delivered. Their transparent pricing, fast setup, and guaranteed compliance were exactly what I needed. Now, my business is growing in Asia!"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/12.jpg",
            name: "John Smith",
            title: "CEO of InnovateTech",
            quote: "Working with FormEasily was a seamless experience. I was able to get my company up and running in just one day with their fully digital process. The support team was responsive, and everything was handled remotely, saving me time and money."
        },
    ]

    return (
        <SectionWrapper className="pb-0">
            <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        See what others saying about us
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Listen to what the experts around the world are saying about us.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-white border p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-14 h-14 object-cover rounded-full" alt={item.name} />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Testimonials