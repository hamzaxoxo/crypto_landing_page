import Image from 'next/image'
import React from 'react'
import hero from '../assets/safari.svg'
import Logo from './Logo'

export default function Hero() {
    return (
        <section className="relative py-6 sm:py-12 bg-white">
            <div className="blur-sm absolute inset-x-0 bottom-0 h-1/2 bg-[#F8F8FC] z-0" />

            <div className="relative z-10 mt-10 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12">
                <div className="mb-4 space-y-2 text-[40px] md:text-[56px] font-extrabold">
                    <h1 className="text-[#2752E7] tracking-tight leading-none">
                        One platform
                    </h1>
                    <h1 className="text-[#2C3131]">
                        all things Crypto
                    </h1>
                </div>

                <p className="max-w-[42rem] mx-auto text-[20px] font-light text-[#626262]">
                    Open a free account in minutes right from your phone and make your money go further
                </p>
            </div>

            <form className="relative z-10 px-4 max-w-xl mx-auto flex items-center sm:flex-row flex-col gap-3 mt-8">
                <input
                    type="text"
                    id="voice-search"
                    className="flex-1 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pr-10 pl-5 py-5 placeholder:text-[#A9A9A9]"
                    placeholder="Email Address..."
                />
                <button
                    type="submit"
                    className="w-40 py-5 px-3 text-sm font-medium text-white bg-[#2752E7] rounded-lg border border-[#2752E7] hover:bg-[#4568e7]"
                >
                    Get started
                </button>
            </form>

            <div className="relative z-10 lg:block md:block sm:block hidden max-w-6xl px-10 mx-auto mt-20">
                <Image
                    src={hero}
                    alt="Hero Image"
                    width={1080}
                    height={405}
                    className="w-full max-w-7xl mx-auto"
                />
            </div>

            <div className="relative z-10">
                <Logo />
            </div>
        </section>
    )
}
