import NavLink from "../NavLink"

const Hero = () => (
    <section className="relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-90"></div>
        
        {/* Animated gradient circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="custom-screen py-20 text-gray-600 relative z-10">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl text-center">
                    The <span className="text-indigo-600 font-bold">Easiest</span> Way to Register Your Company in <span className="text-indigo-600 font-bold">Hong Kong and China</span>
                </h1>
                <p className="max-w-xl mx-auto text-gray-600">
                    We simplify the complexities of establishing your business in Asia, offering expert guidance and end-to-end services so you can focus on what matters most: <span className="font-bold text-gray-800">Growth！</span>
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="inline-block font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                    >
                        Get Started
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-700 bg-white/80 hover:bg-white border border-gray-300 px-6 py-2.5 rounded-lg transition-all duration-200"
                        scroll={false}
                    >
                        Learn more
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero