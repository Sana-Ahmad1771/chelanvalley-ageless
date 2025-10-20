"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../../public/logo.png";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./megamenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const navItemClass = (path) =>
    `relative py-2 transition-all duration-300 group hover:text-secondary ${
      pathname === path ? "text-primary-light" : "text-dark"
    }`;

  const navItemBorderClass = (path) =>
    `absolute left-0 bottom-0 w-full h-0.5 rounded-t-md transition-all duration-300 ${
      pathname === path ? "bg-secondary" : "bg-transparent group-hover:bg-secondary"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white font-inter shadow-sm">
      {/* === Top Bar === */}
      {/* <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 border-b border-neutral/20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex justify-between items-center h-12 text-sm text-dark">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2">
              <FiPhone className="text-secondary" />
              <span
                onClick={() => copyToClipboard("(239) 555-0108")}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                (239) 555-0108
              </span>
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineEmail className="text-secondary" />
              <span
                onClick={() => copyToClipboard("info@chelanvalleyskincare.com")}
                className="cursor-pointer hover:underline underline-offset-4"
              >
                info@chelanvalleyskincare.com
              </span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-secondary hover:scale-110 transition">
              <RiFacebookFill size={18} />
            </a>
            <a href="#" className="hover:text-secondary hover:scale-110 transition">
              <FaXTwitter size={18} />
            </a>
            <a href="#" className="hover:text-secondary hover:scale-110 transition">
              <LuInstagram size={18} />
            </a>
            <a href="#" className="hover:text-secondary hover:scale-110 transition">
              <RxLinkedinLogo size={18} />
            </a>
          </div>
        </div>
      </div> */}

      {/* === Navbar === */}
      <nav className="bg-white relative backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={Logo}
              alt="Chelan Valley Skin Care Logo"
              width={140}
              height={40}
              className="w-auto h-14"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-10 text-[16px] font-medium tracking-wide">
            <li>
              <Link href="/" className={navItemClass("/")}>
                Home <span className={navItemBorderClass("/")} />
              </Link>
            </li>
            <li>
              <Link href="/about" className={navItemClass("/about")}>
                About <span className={navItemBorderClass("/about")} />
              </Link>
            </li>
            <li className="relative flex items-center group">
              <MegaMenu setIsMegaMenuOpen={setIsMegaMenuOpen} />
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 rounded-t-md transition-all duration-300 ${
                  pathname.startsWith("/services")
                    ? "bg-secondary"
                    : "bg-transparent group-hover:bg-secondary"
                }`}
              ></span>
            </li>
            <li>
              <Link href="/products" className={navItemClass("/products")}>
                Products <span className={navItemBorderClass("/products")} />
              </Link>
            </li>
            <li>
              <Link href="/contact" className={navItemClass("/contact")}>
                Contact <span className={navItemBorderClass("/contact")} />
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-secondary focus:outline-none"
          >
            {!isMenuOpen && <AlignRight size={30} />}
          </button>
        </div>

        {/* Background Blur when Mega Menu Open */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-[130px] bg-primary/10 backdrop-blur-sm z-30"
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-white z-50 px-6 pt-16"
            >
              <div className="flex justify-between items-center mb-6">
                <Link href="/" onClick={closeMenu}>
                  <Image
                    src={Logo}
                    width={130}
                    height={40}
                    alt="logo"
                    className="w-auto h-14"
                  />
                </Link>
                <button onClick={closeMenu} className="text-secondary">
                  <IoCloseSharp size={30} />
                </button>
              </div>

              <ul className="flex flex-col gap-6 text-lg font-medium">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/products", label: "Products" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block py-2 ${
                        pathname === item.href
                          ? "text-secondary border-b-2 border-secondary"
                          : "text-neutral hover:text-secondary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Copy Toast */}
      {copied && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-2 rounded shadow-md text-sm z-50">
          Copied to clipboard!
        </div>
      )}
    </header>
  );
};

export default Header;
