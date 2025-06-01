import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
import attach_money from "../../../public/icons/money.svg"
import assignment_turned_in from "../../../public/icons/assignment_turned_in_24dp_ 4B5563.svg"
import verified from "../../../public/icons/verified_user_24dp_ 4B5563.svg"
import devices from "../../../public/icons/devices_other_24dp_ 4B5563.svg"
import support from "../../../public/icons/support_agent_24dp_ 4B5563.svg"
import rocket_launch from "../../../public/icons/rocket_launch_24dp_ 4B5563.svg"

const ToolKit = () => {

    const features = [
        {
            icon: attach_money,
            title: "Transparent Pricing",
            desc: "Fixed, all-inclusive plans with no hidden fees."
        },
        {
            icon: assignment_turned_in,
            title: "Effortless Onboarding",
            desc: "Quick setup with full support, whether a startup or expanding business."
        },
        {
            icon: verified,
            title: "Guaranteed Compliance",
            desc: "Expert team ensures full regulatory compliance."
        },
        {
            icon: devices,
            title: "Fully Digital",
            desc: "Paperless process with smart tech for easy company registration."
        },
        {
            icon: support,
            title: "World-Class Support",
            desc: "Dedicated team provides fast, expert assistance."
        },
        {
            icon: rocket_launch,
            title: "Rapid Setup",
            desc: "Launch your business in just one day."
        },
    ]

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Why FormEasily？
                    </h2>
                    <p>
                        These are a few of our favourite things
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                        <Image src={item.icon} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ToolKit