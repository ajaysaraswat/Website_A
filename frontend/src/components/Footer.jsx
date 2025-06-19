import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Checkbox } from "./Checkbox";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-t from-black to-black  text-white min-h-screen flex flex-col text-[15px]"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      {/* <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-pink-600 opacity-90"></div> */}
      {/* Main Footer Content */}
      <div className="flex-1 px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12 md:mb-20">
            {/* Logo and Company Info */}
            <div className="mb-8 lg:mb-0">
              <div className="mb-4">
                <h1 className="text-2xl md:text-4xl text-[#EA6220] font-bold tracking-tight">
                  Instrek
                </h1>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                  Technologies
                </h1>
                <p className="text-xs md:text-sm tracking-wider text-gray-400 mt-2">
                  A SOFTWARE COMPANY
                </p>
              </div>
              <div className="mt-6 md:mt-8">
                <p className="text-xs md:text-sm text-gray-400 mb-2">
                  WE ENGINEER
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                  DIGITAL BUSINESS
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-left lg:text-right">
              <a
                href="mailto:hello@futuremind.com"
                className="text-xs md:text-sm hover:text-gray-300 transition-colors underline"
              >
                HELLO@INSTREK.COM
              </a>
              <p className="text-xs md:text-sm mt-2">+91 23456-7890</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
            <div>
              <nav className="space-y-2 md:space-y-3">
                <a
                  href="#"
                  className="block text-xs md:text-sm hover:text-gray-300 transition-colors underline"
                >
                  ABOUT US
                </a>
                <a
                  href="#"
                  className="block text-xs md:text-sm hover:text-gray-300 transition-colors underline"
                >
                  AI-DRIVEN IT SERVICES
                </a>
                <a
                  href="#"
                  className="block text-xs md:text-sm hover:text-gray-300 transition-colors underline"
                >
                  SMART CITY SOLUTIONS
                </a>
                <a
                  href="#"
                  className="block text-xs md:text-sm hover:text-gray-300 transition-colors underline"
                >
                  ACCESSIBILITY
                </a>
              </nav>
            </div>
            <div>
              <nav className="space-y-2 md:space-y-3">
                <a
                  href="#"
                  className="block text-xs md:text-sm hover:text-gray-300 transition-colors underline"
                >
                  TRAINING AND SKILLING
                </a>
                <a
                  href="#"
                  className="block text-xs md:text-sm hover:text-gray-300 transition-colors underline"
                >
                  SOLUTIONS
                </a>
                <a
                  href="#"
                  className="block text-xs md:text-sm hover:text-gray-300 transition-colors underline"
                >
                  INSIGHTS
                </a>
                <a
                  href="#"
                  className="block text-xs md:text-sm hover:text-gray-300 transition-colors underline"
                >
                  CONTACT
                </a>
                <a
                  href="#"
                  className="block text-xs md:text-sm hover:text-gray-300 transition-colors underline"
                >
                  PRESS OFFICE
                </a>
              </nav>
            </div>
            <div className="sm:col-start-2 md:col-start-4">
              <nav className="space-y-2 md:space-y-3">
                <a
                  href="#"
                  className="block text-xs md:text-sm hover:text-gray-300 transition-colors underline"
                >
                  FACEBOOK
                </a>
                <a
                  href="#"
                  className="block text-xs md:text-sm hover:text-gray-300 transition-colors underline"
                >
                  LINKEDIN
                </a>
                <a
                  href="#"
                  className="block text-xs md:text-sm hover:text-gray-300 transition-colors underline"
                >
                  INSTAGRAM
                </a>
              </nav>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-light mb-6 md:mb-8">
              Get Smart with{" "}
              <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
                Instrek{" "}
              </span>
            </h2>
            <p className="text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base px-4">
              A BETTER EXPERIENCE FOR YOUR CUSTOMERS WITH FUTURE MIND.
            </p>

            {/* Email Subscription Form */}
            <div className="max-w-md mx-auto mb-6 md:mb-8 px-4">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="E-MAIL"
                  className="bg-transparent border-gray-600 border-r-0 rounded-r-none text-white placeholder:text-gray-500 focus:border-gray-400 text-sm"
                />
                <Button
                  size="icon"
                  className="bg-transparent border border-gray-600 border-l-0 rounded-l-none hover:bg-gray-800"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start space-x-3 max-w-3xl mx-auto text-left px-4">
              <Checkbox id="privacy" className="mt-1 border-gray-600" />
              <label
                htmlFor="privacy"
                className="text-xs md:text-sm text-gray-400 leading-relaxed"
              >
                I agree to the processing of my data by Future Mind Sp. z o.o.
                for marketing purposes, including sending emails (newsletters
                and educational materials). For details see the{" "}
                <a href="#" className="underline hover:text-gray-300">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-4 md:px-8 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400">
          <p>© 2025 INSTREK TECH.</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 mt-4 md:mt-0">
            <span>ALL RIGHTS RESERVED</span>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors underline"
            >
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
