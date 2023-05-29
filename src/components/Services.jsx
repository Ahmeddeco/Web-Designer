import React from "react";
import { services } from "../data";

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <h2 className='section-title'>
          {services.title} <span className='dot'></span>
        </h2>
        <p className='section-subtitle'>{services.subtitle}</p>
        {/* services items */}
        <div className='flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between lg:px-[136px]'>
          {services.skills.map((services, index) => {
            return (
              <div className='p-[30px] w-full max-w-[417px] flex flex-col text-center hover:bg-white hover:shadow-2xl cursor-crosshair transition-all lg:text-left'>
                {/* icon */}
                <div className='w-20 h-20 mb-12 mx-auto lg:mx-0'>
                  <img src={services.icon} alt='icon' className='' />
                </div>
                {/* services name */}
                <h3 className='text-2xl mb-3 font-semibold'>{services.name}</h3>
                {/* services description */}
                <p className='text-gray-800 text-lg lg:mb-16'>{services.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
