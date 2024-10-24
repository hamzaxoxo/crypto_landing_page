'use client'

import crypto from '@/assets/Crypto.svg'
import tiktik from '@/assets/Titik.svg'
import Image from 'next/image'

export default function CTA() {
    return (
        <section className="md:px-20 mb-20">
            <div className="relative">

                <div className='relative bg-[#2752E7] p-6 sm:px-20 sm:py-[70px]  py-[8rem] md:rounded-[20px] w-full text-white sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto overflow-hidden'>
                    {/* Crypto image */}
                    <div className='z-30 xl:block hidden absolute 
                    right-[80px] 
                    bottom-[35px]
                    '>
                        <Image
                            src={crypto}
                            alt="Crypto"
                            width={300}
                            height={300}
                            className='w-full'
                        />
                    </div>
                    {/* Tiktik Image */}
                    <div className='Tiktik absolute right-2 bottom-24 md:bottom-0 md:right-[150px] sm:right-[150px] z-20'>
                        <Image
                            src={tiktik}
                            alt="Tiktik"
                            width={202}
                            height={202}
                            className='md:w-[202px] sm:w-[150px] w-[150px] '
                        />
                    </div>

                    {/* Text Section */}
                    <div className="TextSection w-full xl:text-left text-center gap-6 z-40 relative">
                        <h1 className="leading-tight text-[30px] sm:text-[40px] text-[white] font-semibold">
                            Join a new generation of <br /> investors
                        </h1>
                        <button
                            data-aos="zoom-in-down"
                            type="button"
                            className="w-full sm:w-[175px] mt-8 px-[40px] py-[20px] rounded-[10px] text-[#2C3131] bg-white self-center text-[16px] font-semibold">
                            Get Started
                        </button>
                    </div>

                    {/* Ellipse Background */}
                    <div className='w-[921px] h-[921px] rounded-full 
                        absolute
                        right-[-30rem] 
                        bottom-[-50rem]
                        xl:right-[-325px] 
                        xl:bottom-[-570px] 
                        z-0 bg-[#406EEC]'>
                    </div>

                    {/* Background Circles */}
                    <div className="circle two" />
                    <div className="circle four" />
                    <div className="circle three" />
                </div>
            </div>

        </section>
    )
}
