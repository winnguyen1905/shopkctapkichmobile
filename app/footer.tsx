import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Win Nguyễn Company</h2>
          <p className="text-sm">
            Empowering your real estate journey with trust, service, and heart.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">Email: Winnguyen1905.work@gmail.com</p>
          <p className="text-sm">Phone: +84375359048</p>
          <p className="text-sm">Location: TP Thủ Đức TP Hồ Chí Minh, Việt Nam</p>
        </div>

        {/* Newsletter or Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Connected</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Winnguyen1905.work@gmail.com"
              className="w-full px-2 py-1 rounded bg-gray-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} WINNGUYEN Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
