import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div className="mt-10 border-b border-2 border-gray-200"></div>
          <div className="py-6 flex justify-center">
            <p className=" text-white">&copy; { currentYear } | Developed By <a href="https://janiidu.me" target="_blank" rel="noreferrer" className=" bg-gradient-to-l from-purple-500 to-pink-400 text-transparent bg-clip-text">Janidu Rathnayaka</a> </p>
            <div>
            </div>
          </div>
    </footer>
  );
}

export default Footer;