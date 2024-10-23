'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLargeFill } from 'react-icons/ri';
import logo from "../assets/Logo.svg"
type NavLink = {
    href: string;
    label: string;
    isActive?: boolean;
};

const navLinks: NavLink[] = [
    { href: '#', label: 'Product', isActive: true },
    { href: '#', label: 'Price' },
    { href: '#', label: 'Learn' },
    { href: '#', label: 'Support' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="py-5 px-4">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto">
                <Image
                    src={logo}
                    alt="logo"
                    width={150}
                    height={40}
                />

                <button
                    data-aos="zoom-in-down"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#2C3131] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-[#2C3131]"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    {
                        isMenuOpen ? (
                            <RiCloseLargeFill data-aos="zoom-in" className="w-6 h-6" />
                        ) : (
                            <GiHamburgerMenu className="w-6 h-6" />
                        )
                    }
                </button>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {navLinks.map((link) => (
                            <li data-aos="zoom-in-down" key={link.label}>
                                <Link
                                    href={link.href}
                                    className={`font-normal block py-2 px-3 hover:font-semibold rounded md:hover:bg-transparent md:p-0`}
                                    aria-current={link.isActive ? 'page' : undefined}
                                >
                                    {link.label}
                                </Link>
                            </li>

                        ))}
                    </ul>
                </div>


                <div className="rtl:space-x-reverse md:flex hidden">
                    <button
                        data-aos="zoom-in-down"
                        type="button"
                        className="text-[#2C3131] self-center text-md font-semibold rtl:space-x-reverse md:block hidden ">
                        Sign in
                    </button>
                    <button
                        data-aos="zoom-in-down"
                        type="button"
                        className="ml-10 px-4 py-2 border-[#2752E7] border rounded-[10px] text-[#2752E7] self-center text-md font-semibold rtl:space-x-reverse md:block hidden ">
                        Get Started
                    </button>
                </div>


                {isMenuOpen && (
                    <div className="w-full md:hidden" id="mobile-menu">
                        <ul data-aos="fade-down" className="rounded-lg flex flex-col px-2 mt-2 py-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <li data-aos="fade-right" key={link.label}>
                                    <Link
                                        onClick={() => setIsMenuOpen(false)}
                                        href={link.href}
                                        className={`block py-2 px-3 rounded bg-transparent ${link.isActive
                                            ? 'text-[#2C3131] font-bold'
                                            : 'text-[#2C3131] font-normal'
                                            }`}
                                        aria-current={link.isActive ? 'page' : undefined}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}