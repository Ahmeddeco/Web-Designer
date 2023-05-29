import React from "react";
import { contributors } from "../data";

const Contributors = () => {
  return (
    <section id='contributors' className='section'>
      <div className='container mx-auto'>
        <h2 className='section-title'>
          {contributors.title} <span className='dot'></span>
        </h2>
        <p className='section-subtitle'>{contributors.subtitle}</p>
        {/* contributors list */}
        <div className='flex flex-col gap-10 items-center lg:flex-row lg:gap-20 lg:flex-wrap lg:justify-center lg:px-[204px]'>
          {contributors.brands.map((brand, index) => {
            return (
              <div className='flex max-w-[260px] h-24 items-center'>
                <img src={brand.image} alt="brand's logo" className='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contributors;
