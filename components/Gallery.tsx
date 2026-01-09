import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section className="py-12 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#0d1b10] dark:text-white">A Visual Taste</h2>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl">From the highlands of Ha Tinh to your table.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-96">
          
          <div className="h-full w-full rounded-xl overflow-hidden relative group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjJYtreKQHvPNV6B0QSp7VCZ-goSXExvLASkpF5IHu348Up8PCqKKUr7lKOOeFyhNXXLnyESMxip6zvPqp7SgqyGCF55pmRSPKaAxR7I3K0WL34p3GWVN00Zi2HVeA_sOvc5MRQIFRNPUy60znwBlskH7Q0SlslFmq46-oIiwG5l688OtKs3vAONP_VVX0KOIo7_7_yPijMyCSy0S60mf6UG_DT6kj-qPeJnAh7lWLf8vMiQGMYYVegOOBBI-Gz_XKXNgCDv0dD3Fu')"}}
              aria-label="Person holding a cup of green tea with steam rising"
            ></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
          
          <div className="h-full w-full rounded-xl overflow-hidden relative group lg:col-span-2">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwnmSjKFyA4-35w-XK-i6G1e049EKvFkPincSefhADYHDSIpu28HnN0FBc2trmr4hjlcGv9sCIb0pDSLWz6J2u6Pb9_6LmDyKwnOH0r-osp_7R5eDot68CdKClX9nVcqyWQsqFu0FEHL8irt9hHMAsN4a_d0nt5mVL3qWTfrKx5K6HLX-atIZoAIe0w503aT36lVI6K_b4svX-EmGpEmrFwtjo8seqDhm_OZg06XjE_O3I5r0q5Yg34X_cVeWW7dq6kZkEV6JNMLIh')"}}
              aria-label="Wide shot of a tea plantation in Vietnam"
            ></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-xs font-bold uppercase tracking-wider bg-black/30 backdrop-blur-sm px-2 py-1 rounded">Origin</span>
              <p className="font-bold mt-1">Hà Tĩnh & Thái Nguyên</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Gallery;