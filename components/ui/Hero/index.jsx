import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl text-center">
                    The <span style={{ color: "rgb(79,70,229)", fontWeight: "bold" }}>Easiest</span> Way to Register Your Company in <span style={{ color: "rgb(79,70,229)", fontWeight: "bold" }}>Hong Kong and China</span>
                </h1>
                <p className="max-w-xl mx-auto">
                    We simplify the complexities of establishing your business in Asia, offering expert guidance and end-to-end services so you can focus on what matters most: <span style={{ color: "rgb(31,44,55)", fontWeight: "bold" }}>Growth！</span>
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        Start building
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50"
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