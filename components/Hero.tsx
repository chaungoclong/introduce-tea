import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary dark:text-primary mx-auto lg:mx-0">
              <span className="material-symbols-outlined text-[16px]">local_cafe</span>
              Traditional Ritual
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-[#0d1b10] dark:text-white sm:text-5xl lg:text-6xl">
              Balance Sweetness<br />with <span className="text-primary">Bitterness</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 lg:mx-0">
              Discover the perfect harmony of <strong>Cu Do</strong> candy and fresh green tea. A traditional Vietnamese ritual that engages all your senses.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start pt-2">
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
                Start Guide
                <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
              </button>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#cfe7d3] dark:border-[#2a452e] bg-transparent px-8 text-base font-bold text-[#0d1b10] dark:text-white transition-all hover:bg-primary/5">
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
                Watch Video
              </button>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#e0f2f1] to-[#dcedc8] dark:from-[#1a3c26] dark:to-[#2e4a30] shadow-2xl relative overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQsIo_yS5vkojfhNlxGecx7t8lAu8IFDwGFOQCf4i5ym9DgUTuApHHKfPZZWrwB4XZ4uVv_pspYmICd-1FA_3uwxQZ7ko83lauiHs-ucFv6QN8Gt8GSJ8BRMVWT02ixzNBLBwOdPBai7ruoXglWhM606EZPeRU8anm4H8dVBklhDNUNkw6n8aRWBlcM34M7rTlrWlAwO0KlwxT8g9kYmWOpAXyIoUtAuihbxA9MdIQ-aBpZy7_gz_GTpM6UfA2toaD4wISkuMyQk3B')"}}
                aria-label="Close up of tea being poured into a small glass cup"
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium opacity-90">Featured Pairing</p>
                <p className="text-xl font-bold">Thái Nguyên Green Tea & Peanut Candy</p>
              </div>
            </div>
            
            {/* Decor elements */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-primary/10"></div>
            <div className="absolute -top-6 -left-6 -z-10 h-32 w-32 rounded-full bg-[#8c6b5d]/10 blur-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;