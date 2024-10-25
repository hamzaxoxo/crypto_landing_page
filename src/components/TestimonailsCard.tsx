import React from "react";
import { Testimonial } from "./constant/TestimonialData";
import Image from "next/image";

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="marginBottom bg-white border border-[#E3E3E3] test-padd rounded-[10px] hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="flex items-center mb-4">
            <Image
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
                className="w-10 h-10 rounded-full mr-4"
                width={40}
                height={40}
            />
            <div>
                <h3 className="text-[14px] font-bold text-[#2C3131]">{testimonial.name}</h3>
                <p className="text-[12px] font-semibold text-[#A9A9A9]">{testimonial.role}</p>
            </div>
        </div>
        <p className="text-[14px] font-normal text-[#626262]">{testimonial.message}</p>
    </div>
);
