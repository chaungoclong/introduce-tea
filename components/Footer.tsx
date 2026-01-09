import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#e7f3e9] dark:border-[#1f3522] bg-background-light dark:bg-background-dark py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="material-symbols-outlined text-primary">eco</span>
          <span>© 2024 The Art of Pairing. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a className="text-gray-400 hover:text-primary transition-colors" href="#">
            <span className="sr-only">Facebook</span>
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
            </svg>
          </a>
          <a className="text-gray-400 hover:text-primary transition-colors" href="#">
            <span className="sr-only">Instagram</span>
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.315 2zm-3.196 1.983c-2.296.105-3.008.573-3.716 1.282-.709.709-1.177 1.42-1.282 3.716-.084 1.848-.086 2.055-.086 4.945v.074c0 2.924.002 3.125.086 5.019.105 2.296.573 3.008 1.282 3.716.709.709 1.42 1.177 3.716 1.282 1.848.084 2.055.086 4.945.086h.074c2.924 0 3.125-.002 5.019-.086 2.296-.105 3.008-.573 3.716-1.282.709-.709 1.177-1.42 1.282-3.716.084-1.848.086-2.055.086-4.945v-.074c0-2.924-.002-3.125-.086-5.019-.105-2.296-.573-3.008-1.282-3.716-.709-.709-1.42-1.177-3.716-1.282-1.848-.084-2.055-.086-4.945-.086H9.193c-2.89 0-3.097.002-4.945.086zm8.816 1.764a1.746 1.746 0 110 3.492 1.746 1.746 0 010-3.492zM12.314 6.84a5.474 5.474 0 100 10.949 5.474 5.474 0 000-10.949zm0 1.984a3.49 3.49 0 110 6.98 3.49 3.49 0 010-6.98z" fillRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;