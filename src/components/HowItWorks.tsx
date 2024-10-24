import Image from 'next/image'
import React from 'react'
import Frame1 from '@/assets/HowItWorksImage/Frame1.svg'
import Frame2 from '@/assets/HowItWorksImage/Frame2.svg'
import Frame3 from '@/assets/HowItWorksImage/Frame3.svg'

export default function HowItWorks() {

    const workData = [
        {
            id: 1,
            title: "Sign Up",
            description: "Buy Bitcoin or Ethereum, then securely store it in your wallet or send it on easily to friends",
            image: Frame3
        },
        {
            id: 2,
            title: "Fund",
            description: "Choose you preferred payment method such as bank transfer or credit card to top up your wallet ",
            image: Frame1
        },
        {
            id: 3,
            title: "Buy Crypto",
            description: "Sign up for free wallet on web, IOS or Android and follow our easy process to set up your profile",
            image: Frame2
        }
    ]
    return (
        <section className="relative py-6 sm:py-12 bg-white">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#F8F8FC] z-0" />
            <div className="relative z-10 container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="lg:max-w-md xl:max-w-[32rem] mx-auto text-[32px] sm:text-[48px] text-[#2C3131] font-extrabold leading-tight">Get Started in Just Few Minute</h2>
                    <p className="font-light text-[18px] text-[#626262]">Has a variety of features that make it the best place to start trading</p>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col gap-10 justify-center items-center">
                    {workData.map((data) => (
                        <article key={data.id} className="bg-white border border-[#E3E3E3] rounded-[20px] flex flex-col justify-center items-center">
                            <div className='w-[200px] h-[200px]'>
                                <Image alt="" className="object-cover w-[200px] h-[200px]" src={data.image} />
                            </div>
                            <div className="flex flex-col text-center flex-1 p-6">
                                <h2 className="text-[24px] mb-4 text-[#2C3131] font-bold leading-tight">{data.title}</h2>
                                <p className="lg:max-w-md xl:max-w-xs font-light text-[16px] tracking-tight text-[#626262]">
                                    {data.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>

    )
}
