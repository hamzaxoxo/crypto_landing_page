'use client'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialData } from './constant/TestimonialData';
import { TestimonialCard } from './TestimonailsCard';

export default function TestimonialsSection() {
    return (
        <section className='relative p-4 sm:py-20 sm:mb-20 overflow-hidden sm:h-screen'>
            <div className="mx-auto max-w-7xl">
                <h2 className="text-black py-6 text-[32px] sm:text-[48px] text-center font-bold">
                    What people are saying
                </h2>

                <div className="block sm:hidden">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        grabCursor={true}
                        navigation={false}
                        pagination={{ clickable: true }}
                    >
                        {TestimonialData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard testimonial={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="hidden sm:block">
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
                        {TestimonialData.map((item, index) => (
                            <div key={index} className="break-inside-avoid">
                                <TestimonialCard testimonial={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-white" />
        </section>
    );
}
