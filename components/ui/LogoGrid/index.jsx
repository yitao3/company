import Image from 'next/image'
import customers from '../../../public/icons/customers.svg'
import hkcompany from '../../../public/icons/hkcompany.svg'
import cncompany from '../../../public/icons/cncompany.svg'
import countries from '../../../public/icons/countries.svg'

const stats = [
    {
        title: "Number of Clients",
        icon: customers,
        value: "5000+"
    },
    {
        title: "Hong Kong Companies Registered",
        icon: hkcompany,
        value: "3000+"
    },
    {
        title: "Mainland China Companies Registered",
        icon: cncompany,
        value: "2000+"
    },
    {
        title: "Client's Country",
        icon: countries,
        value: "100+"
    }
]

const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-bold text-xl text-black text-center mt-24">
                TRUSTED BY CLIENTS FROM AROUND THE WORLD
            </h2>
            <div className="mt-6">
                <div className="grid grid-cols-4 gap-8 items-center justify-items-center">
                    {
                        stats.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="flex items-center gap-2">
                                    <Image src={item.icon} alt={item.title} width={24} height={24} />
                                    <span className="text-2xl font-bold text-black">{item.value}</span>
                                </div>
                                <span className="text-sm font-bold text-black mt-2 text-center">{item.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
)

export default LogoGrid