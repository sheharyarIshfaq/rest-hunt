import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="container py-10 flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex-[2]">
          <h1 className="text-2xl font-semibold text-main">RestHunt</h1>
          <p className="mt-2 text-label">
            A shared accommodation platform for students
          </p>
          <p className="mt-2 text-label">
            RestHunt is a platform that helps students find their ideal shared
            accommodation.
          </p>
          <p className="mt-2 text-label">
            © 2024 RestHunt. All rights reserved.
          </p>
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-2">Companies</h1>
          <ul className="text-label flex flex-col gap-3">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press</li>
          </ul>
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-2">Become a partner</h1>
          <ul className="text-label flex flex-col gap-3">
            <li className="hover:underline cursor-pointer">Partner Login</li>
            <li className="hover:underline cursor-pointer">
              List Your Property
            </li>
            <li className="hover:underline cursor-pointer">
              List Your Services
            </li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-2">
            Stay updated by joining our Newsletter
          </h1>
          <div className="border bg-transparent flex justify-between">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent outline-none flex-1 py-3 px-4"
            />
            <button className="px-6 flex items-center justify-center bg-main font-semibold text-white">
              Subscribe
            </button>
          </div>
          <div className="mt-2">
            <h1 className="text-lg font-semibold mb-2">Our Socials</h1>
            <div className="flex items-center gap-4">
              <button>
                <BsFacebook className="text-3xl text-gray-200" />
              </button>
              <button>
                <BsInstagram className="text-3xl text-gray-200" />
              </button>
              <button>
                <BsLinkedin className="text-3xl text-gray-200" />
              </button>
              <button>
                <BsYoutube className="text-3xl text-gray-200" />
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="border-t py-4">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="hidden sm:flex items-center justify-center gap-8">
            <Link className="text-label" href="/terms">
              Terms & Conditions
            </Link>
            <Link className="text-label" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="text-label" href="/cookies">
              Cookies Policy
            </Link>
            <Link className="text-label" href="/sitemap">
              Sitemap
            </Link>
          </div>
          <p className="text-label">© 2024 RestHunt. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
