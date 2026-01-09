import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="absolute inset-0 bg-[#e7f3e9]/50 dark:bg-[#1f3522]/50"></div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
          <span className="material-symbols-outlined">redeem</span>
        </span>
        <h2 className="text-3xl font-black tracking-tight text-[#0d1b10] dark:text-white sm:text-4xl">
          Ready to experience the ritual?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-300">
          Get the complete pairing set delivered to your door. Includes premium Thái Nguyên green tea and authentic Cu Do candy.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:translate-y-[-2px] hover:shadow-xl hover:bg-primary/90">
            Shop The Pairing Set
          </button>
          <button className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-lg border border-[#8c6b5d] px-8 text-base font-bold text-[#8c6b5d] dark:text-[#d7ccc8] transition-all hover:bg-[#8c6b5d]/10">
            Learn More About Cu Do
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-500">Free shipping on international orders over $50</p>
      </div>
    </section>
  );
};

export default CallToAction;