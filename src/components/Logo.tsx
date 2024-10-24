import Image from 'next/image'
import React from 'react'
import tether from '../assets/CompanyLogos/tether.svg'
import binance from '../assets/CompanyLogos/binance.svg'
import bitcoin from '../assets/CompanyLogos/bitcoin.svg'
import bitmex from '../assets/CompanyLogos/bitmex.svg'
import coinbase from '../assets/CompanyLogos/coinbase.svg'

export default function Logo() {
    const logo = [
        { href: '#', src: binance, alt: 'Binance' },
        { href: '#', src: coinbase, alt: 'Coinbase' },
        { href: '#', src: bitcoin, alt: 'Bitcoin' },
        { href: '#', src: tether, alt: 'Tether' },
        { href: '#', src: bitmex, alt: 'Bitmex' },
    ]
    return (
        <section className="my-8 lg:my-16">
            <div className="py-8 mx-auto max-w-screen-xl">
                <div className="flex flex-wrap lg:justify-between justify-center gap-8 text-gray-500 sm:gap-12">
                    {/* <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 dark:text-gray-400"> */}
                    {
                        logo.map((item, index) => (
                            <a key={index} href="#" className="flex justify-center items-center">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={120}
                                    height={40}
                                />
                            </a>
                        ))
                    }
                    {/* </div> */}
                </div>
            </div>
            <div className="mx-5 my-8 lg:my-16 max-w-7xl sm:mx-auto bg-white border border-gray-300 rounded-lg p-10 flex sm:flex-row flex-col justify-between items-center gap-8">
                <div className="text-center px-10">
                    <p className="text-[48px] font-light text-gray-800">99k</p>
                    <p className="text-gray-500">People have joined</p>
                </div>
                <div className="sm:h-20 sm:w-0 h-0 w-28 sm:border-l border-b border-gray-300" />
                <div className="text-center px-10">
                    <p className="text-[48px] font-light text-gray-800">50k</p>
                    <p className="text-gray-500">VVIP users have joined</p>
                </div>
                <div className="sm:h-20 sm:w-0 h-0 w-28 sm:border-l border-b border-gray-300" />
                <div className="text-center px-10">
                    <p className="text-[48px] font-light text-gray-800">100+</p>
                    <p className="text-gray-500">Big Companies have joined</p>
                </div>
            </div>


        </section>

    )
}
