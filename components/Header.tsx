import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7f3e9] dark:border-[#1f3522] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">eco</span>
          </div>
          <h2 className="text-lg font-bold tracking-tight">The Art of Pairing</h2>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <div className="hidden items-center rounded-lg border border-[#cfe7d3] dark:border-[#2a452e] bg-transparent p-1 sm:flex">
            <button className="rounded-md px-3 py-1 text-xs font-bold bg-primary text-white shadow-sm transition-colors">EN</button>
            <button className="rounded-md px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">VN</button>
            <button className="rounded-md px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">FR</button>
          </div>
          
          <button className="group relative flex h-10 items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-sm font-bold text-white transition-all hover:bg-primary/90 focus:ring-4 focus:ring-primary/20">
            <span className="relative z-10 flex items-center gap-2">
              <span>Shop Set</span>
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;