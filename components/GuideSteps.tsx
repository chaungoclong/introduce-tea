import React from 'react';

interface StepCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  imageUrl: string;
  colorClass: string;
  textColorClass: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, subtitle, description, icon, imageUrl, colorClass, textColorClass }) => (
  <div className="group relative flex flex-col rounded-2xl border border-[#e7f3e9] dark:border-[#2a452e] bg-[#f8fcf9] dark:bg-[#1a3320] p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${colorClass} text-white shadow-lg transition-transform group-hover:scale-110`}>
      <span className="material-symbols-outlined text-[32px]">{icon}</span>
    </div>
    <div className="mb-2 flex items-center gap-2">
      <span className={`flex h-6 w-6 items-center justify-center rounded-full ${textColorClass.includes('text-white') ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300' : `${colorClass.replace('bg-', 'bg-')}/10 ${textColorClass}` } text-xs font-bold`}>
        {number}
      </span>
      <h3 className="text-xl font-bold text-[#0d1b10] dark:text-white">{title}</h3>
    </div>
    <p className={`mb-1 text-sm font-medium opacity-80 ${textColorClass === 'text-white' ? 'text-gray-500' : textColorClass}`}>{subtitle}</p>
    <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
      {description}
    </p>
    <div className="mt-6 h-48 w-full overflow-hidden rounded-lg bg-gray-100">
      <div 
        className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
        style={{backgroundImage: `url('${imageUrl}')`}}
      ></div>
    </div>
  </div>
);

const GuideSteps: React.FC = () => {
  return (
    <>
      <section className="py-10 bg-white dark:bg-[#152a1a]">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-primary">How to Enjoy</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#0d1b10] dark:text-white sm:text-4xl">The 3 Steps to Perfection</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 dark:text-gray-400">
            Follow this simple guide to experience the authentic flavor balance enjoyed by locals for generations.
          </p>
        </div>
      </section>

      <section className="relative py-12 lg:py-20 bg-white dark:bg-[#152a1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <StepCard 
              number="1"
              title="The Brew"
              subtitle="(Pha Trà)"
              description="Brew fresh green tea leaves at 80°C. High temperature releases the delicate grassy aroma and slight bitterness essential for the pairing."
              icon="emoji_food_beverage"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuACLOLAXyWByzKeRja_4OTBpJn37p_Nwwp4aOpYD5GlCHZYQ4Z8s5rFO39vnTsIV5T4GJOccwMvL7NJAmaaaQRzTw6mAvoPYVEayhMTk6Mcg1e52s5u_5zou38Pnj8N5an-GW0FMHNSs76KlqZo8tdfeBpLbqladSGY8e273kBi_hsRfAHPezYb9HZujqa59aqTAkps4CPmoP0jmzsAvKrBcA9-OEWf-KdmGHvwAEAK4PfwKXxpCyMjfhDyFymoj6mKaRXY06GB6lAS"
              colorClass="bg-primary shadow-primary/20"
              textColorClass="text-primary"
            />
            <StepCard 
              number="2"
              title="The Bite"
              subtitle="(Thưởng Bánh)"
              description="Crunch into the crispy rice paper. Let the gooey malt, spicy ginger, and roasted peanuts coat your tongue with sweetness and warmth."
              icon="cookie"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDO_pt6t4SiuWJn--ZUAlXVgBtJEmhRyhITzOj2xE5MKtSkdDMSuobgcz2ilRajSfJ94VGYKLYHl2qmn8cYU7-iellaIMtprQiRkFRE0Qxx_eCsWOYJ2BBJfq6nMomQ0EUuxBLjLTNtf4xl1u0o_Hv-7M8VXOju4zTpbyWXNZU9H2QetQSF70lmT4XG9TNOmYAvAgF1b5avWFy7YzFUT9Dp9Lf0SRuaDvzmS1CCKMc9pAG-h_BXmGaRElRow5UHFhLdk_2nI7qZMUMG"
              colorClass="bg-[#8c6b5d] shadow-[#8c6b5d]/20"
              textColorClass="text-[#8c6b5d]"
            />
            <StepCard 
              number="3"
              title="The Harmony"
              subtitle="(Giao Hòa)"
              description="While the sweetness lingers, take a sip of hot tea. The acridity washes over the sugar, creating a perfectly balanced, refreshing aftertaste."
              icon="balance"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDIuAGdiEt9v4eoiAGDpMpe2MDBUllmcQlMwpcgWcQDCALWOQbWASerk8Bcnb-KCpO7P2xEc2KYG4Vh2R0Ibli7sZJPF8kSqWGxzhKD-r9ahMZaYYHLDtxl9S4C2rYqkYAl_gMl1shStk5VVAXy7L4TSlUbZ77a3yJpJp3X8EEsR3OuwUhmJFkbft2AZhiGzn-EF5y6bEmhtqbKil1BT4HCw0yfd0hSF_ydQ2snpLKRsmZQlBiXi9TYnulFsMmDKa_PlkrmMbQ63neF"
              colorClass="bg-gradient-to-br from-primary to-[#8c6b5d]"
              textColorClass="text-white"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GuideSteps;