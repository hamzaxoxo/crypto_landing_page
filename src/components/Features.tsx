import Image from 'next/image'
import React from 'react'
import featureSec01 from '@/assets/FeaturesImages/Left.svg'
import featureSec02 from '@/assets/FeaturesImages/Right.svg'
import featureSec03 from '@/assets/FeaturesImages/Left-1.svg'

export default function Features() {
    const featureCards = [
        {
            image: featureSec01,
            title: 'Create portfolio today',
            description: 'Buy and sell popular digital currencies, keep track of them in the one place. Has a variety of features that make it the best place to start trading'
        },
        {
            image: featureSec02,
            title: 'Lightning-Fast Crypto Trading',
            description: 'The Exchange supports USD, EUR, and GBP. Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.'
        },
        {
            image: featureSec03,
            title: 'Security From Day One',
            description: 'Safety, security and compliance. Buy and sell popular digital currencies, keep track of them in the one place.'
        },
    ]
    return (
        <section className="bg-white text-gray-800">
            {
                featureCards.map((card, index) => (
                    <div
                        key={index}
                        className={`max-w-screen-xl flex flex-col justify-center items-center mx-auto lg:flex-row ${index === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:justify-between`}
                    >
                        <Image
                            src={card.image}
                            alt={card.title}
                            width={500}
                            height={600}
                            className="object-contain xl:h-112 2xl:h-128 h-80 sm:h-96 lg:h-[35rem]"
                        />
                        <div className="mt-6 flex flex-col justify-center text-center rounded-sm  lg:text-left">
                            <h1 className="lg:max-w-md xl:max-w-[32rem] px-8 text-[32px] font-bold lg:leading-tight xl:leading-[4rem] sm:text-[48px] text-[#111827]">
                                {card.title}
                            </h1>
                            <p className="lg:max-w-md xl:max-w-[35rem] px-8 sm:mt-6 text-[18px] text-[#626262] font-extralight mb-6">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))
            }
        </section>

    )
}
