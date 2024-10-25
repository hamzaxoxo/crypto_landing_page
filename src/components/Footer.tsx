import Image from 'next/image'
import logo from '@/assets/FooterLogo.svg'

export default function Footer() {
    const companyLinks = [
        { name: 'About Us', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Student', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Trust and Safety', href: '#' },
        { name: 'Newsroom', href: '#' },
        { name: 'Videos', href: '#' },
    ]
    const LearnLinks = [
        { name: 'What’s Trending', href: '#' },
        { name: 'Product News', href: '#' },
        { name: 'Events', href: '#' },
        { name: 'University', href: '#' },
        { name: 'Research', href: '#' },
        { name: 'Market Updates', href: '#' },
    ]
    const ProductLinks = [
        { name: 'Stock & Fund', href: '#' },
        { name: 'Cash Card', href: '#' },
        { name: 'Crypto', href: '#' },
        { name: 'Options', href: '#' },
        { name: 'Gold', href: '#' },
        { name: 'Learn Snacks', href: '#' },
    ]
    const SupportLinks = [
        { name: 'Support Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'System Status', href: '#' },
        { name: 'Areas of Availability', href: '#' },
    ]
    const ResourcesLinks = [
        { name: 'Prices', href: '#' },
        { name: 'Site Widgets', href: '#' },
        { name: 'Tax', href: '#' },
        { name: 'Support', href: '#' },
    ]
    return (
        <footer className="text-gray-600 body-font px-5">
            <div className="border-b border-[#CFD1D4] max-w-7xl mx-auto flex md:items-start lg:items-start lg:flex-row lg:flex-nowrap justify-between flex-col">
                <div className="flex flex-col lg:mx-0 mx-auto text-center lg:text-left lg:w-[29rem] w-full mb-10 lg:pr-16">
                    <a className="flex title-font items-center lg:justify-start justify-center title-font font-medium text-gray-900">
                        <Image src={logo} alt="logo" width={200} height={40} />
                    </a>
                    <p className="mt-2 text-[16px] text-gray-500 lg:text-left text-center">
                        Take your crypto to the next level
                    </p>
                    <span className="flex sm:mt-5 mt-2 lg:justify-start justify-center">
                        <a className="text-gray-500">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={0}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </a>
                    </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
                    {
                        [companyLinks, LearnLinks, ProductLinks, SupportLinks, ResourcesLinks].map((links, index) => (
                            <div key={index} className="flex flex-col">
                                <h2 className="title-font font-semibold text-[#2C3131] text-[18px] tracking-wide mb-3">
                                    {index === 0 ? 'Company' : index === 1 ? 'Learn' : index === 2 ? 'Product' : index === 3 ? 'Support' : 'Resources'}
                                </h2>
                                <nav className="space-y-4 list-none mb-10">
                                    {links.map((link, i) => (
                                        <li key={i}>
                                            <a className="text-[16px] tracking-wide text-[#70747D] font-thin" href={link.href}>
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </nav>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="text-[#A0A3A9] text-[16px] text-center pt-8 pb-16 flex gap-2 justify-center items-center">
                <p>
                    © Design by
                    <a
                        href="https://twitter.com/knyttneve"
                        rel="noopener noreferrer"
                        className="ml-1"
                        target="_blank"
                    >
                        Dliya’ Zarror Nibros.
                    </a>
                </p>
                <p> All rights reserved.</p>
            </div>
        </footer>

    )
}
