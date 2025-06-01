import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Get started with FormEasily today
                </h2>
                <p className="mt-3 text-gray-600">
                    Register your business effortlessly with expert support. Follow industry best practices, eliminate complexities, and launch on time with our seamless registration process for Hong Kong and Mainland China.
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                    Get Started
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA