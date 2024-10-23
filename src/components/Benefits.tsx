import Image from 'next/image'
import React from 'react'
import benefitsIMG from '@/assets/Frame 5400.svg'

export default function Benefits() {
    const benefits = [
        {
            id: 1,
            number: '01',
            title: 'Sync between platforms',
            description: 'No matter if you\'re using our web interface or mobile app — your data is always synced. Just one account for all our services.',
        },
        {
            id: 2,
            number: '02',
            title: 'More focus, less clutter',
            description: 'No ads, just the crypto and content you love.',
        },
        {
            id: 3,
            number: '03',
            title: 'Security by default',
            description: 'Enable privacy mode and app locking to protect your data.',
        }
    ]
    return (
        <section className="bg-white">
            
            <div className="max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 py-8 lg:py-16 flex lg:flex-row md:flex-row sm:flex-col flex-col-reverse gap-10">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <div className="flex flex-col items-center justify-center">
                        <div className="px-5 sm:pl-4 lg:max-w-xl md:w-full w-full
                        ">
                            {/* <h1 className="lg:text-left md:text-center text-center text-[32px] sm:text-[38px] md:text-[48px] font-bold text-gray-900 mb-8 sm:leading-[3.5rem]">
                                The Most Trusted Cryptocurrency Platform
                            </h1> */}
                            <h1 className="text-left lg:block hidden text-[48px] font-bold text-gray-900 mb-8 sm:leading-[3.5rem]">
                                The Most Trusted Cryptocurrency Platform
                            </h1>

                            {
                                benefits.map(benefit => (
                                    <div key={benefit.id} className="">
                                        <div className="lg:max-w-md md:w-full flex flex-col items-start">
                                            <div className="flex sm:flex-row flex-col items-start pr-10">
                                                <h2 className="text-[24px] text-[#D0DBFF] font-bold mr-10">{benefit.number}</h2>
                                                <div className="flex flex-col gap-">
                                                    <h3 className="text-[24px] font-bold text-[#2C3131] mb-1">
                                                        {benefit.title}
                                                    </h3>
                                                    <p className="text-gray-500 text-[16px]">
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            benefit.id !== 3 && <div className="my-8 w-full border-b border-[#E3E3E3]" />
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="lg:mt-0">
                    <Image
                        src={benefitsIMG}
                        alt="benefits"
                        width={600}
                        height={600}
                        layout="responsive"
                    />
                </div>
            </div>
        </section>

    )
}
