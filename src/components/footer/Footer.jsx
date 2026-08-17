import React from 'react';
import { Mail } from 'lucide-react';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#f0f0f0] pt-32 pb-10 mt-36 font-sans">
      {/* Floating Newsletter Card */}
      <div className="absolute md:-top-24 -top-46 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-black text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <h2 className="text-3xl md:text-3xl font-[Integral_CF] tracking-tight max-w-md leading-tight text-left">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        <div className="flex flex-col gap-3 w-full md:w-[350px]">
          {/* Email Input */}
          <div className="relative w-full">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-12 pr-4 py-3 font-[satoshi] rounded-full bg-white text-black text-sm outline-none placeholder:text-gray-400 font-medium"
            />
          </div>

          {/* Subscribe Button */}
          <button
            type="button"
            className="w-full py-3 rounded-full bg-white font-[satoshi] text-black text-sm font-semibold hover:bg-gray-100 transition cursor-pointer"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-4 font-[Integral_CF] flex flex-col gap-4">
            <h3 className="text-3xl font-extrabold text-black uppercase tracking-tight">
              SHOP.CO
            </h3>

            <p className="text-black/60 text-sm font-[satoshi] max-w-xs leading-relaxed">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 font-[satoshi]">
              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full border  border-black/10 bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition"
              >
                <FaTwitter className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-black/10 bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition"
              >
                <FaInstagram className="w-4 h-4" />
              </a>

              {/* Github */}
              <a
                href="#"
                aria-label="Github"
                className="w-8 h-8 rounded-full border border-black/10 bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            
            {/* Company */}
            <div className="flex flex-col gap-3 font-[satoshi]">
              <h4 className="text-sm font-semibold tracking-wider text-black uppercase">
                COMPANY
              </h4>

              <ul className="flex flex-col gap-2.5 text-black/60 text-sm">
                <li>
                  <a href="#" className="hover:text-black transition">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-black transition">
                    Features
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-black transition">
                    Works
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-black transition">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div className="flex flex-col gap-3 font-[satoshi]">
              <h4 className="text-sm font-semibold tracking-wider text-black uppercase">
                HELP
              </h4>

              <ul className="flex flex-col gap-2.5 text-black/60 text-sm">
                <li>
                  <a href="#" className="hover:text-black transition">
                    Customer Support
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-black transition">
                    Delivery Details
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-black transition">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-black transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="flex flex-col gap-3 font-[satoshi]">
              <h4 className="text-sm font-semibold tracking-wider text-black uppercase">
                FAQ
              </h4>

              <ul className="flex flex-col gap-2.5 text-black/60 text-sm">
                <li>
                  <a href="#" className="hover:text-black transition">
                    Account
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-black transition">
                    Manage Deliveries
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-black transition">
                    Orders
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-black transition">
                    Payments
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-3 font-[satoshi]">
              <h4 className="text-sm font-semibold tracking-wider text-black uppercase">
                RESOURCES
              </h4>

              <ul className="flex flex-col gap-2.5 text-black/60 text-sm">
                <li>
                  <a href="#" className="hover:text-black transition">
                    Free eBooks
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-black transition">
                    Development Tutorial
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-black transition">
                    How to - Blog
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-black transition">
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Section */}
        <div className="border-t border-black/10 font-[satoshi] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black/60">
          
          <p>
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          {/* Payment Cards */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="bg-white px-3 py-1.5 rounded-md border border-black/10 font-bold text-blue-600 italic text-xs">
              VISA
            </span>

            <span className="bg-white px-3 py-1.5 rounded-md border border-black/10 font-bold text-red-500 text-xs">
              Mastercard
            </span>

            <span className="bg-white px-3 py-1.5 rounded-md border border-black/10 font-bold text-blue-500 italic text-xs">
              PayPal
            </span>

            <span className="bg-white px-3 py-1.5 rounded-md border border-black/10 font-medium text-black text-xs">
              Pay
            </span>

            <span className="bg-white px-3 py-1.5 rounded-md border border-black/10 font-bold text-gray-700 text-xs">
              G Pay
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;