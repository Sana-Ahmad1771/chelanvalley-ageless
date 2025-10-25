"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../../public/logo-horizontal.svg";
import { IoCloseSharp } from "react-icons/io5";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./megamenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  // ✅ lock body scroll when mobile or mega menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen || isMegaMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen, isMegaMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItemClass = (path) =>
    `relative py-2 transition-all duration-300 group hover:text-secondary ${
      pathname === path ? "text-primary-light" : "text-dark"
    }`;

  const navItemBorderClass = (path) =>
    `absolute left-0 bottom-0 w-full h-0.5 rounded-t-md transition-all duration-300 ${
      pathname === path ? "bg-secondary" : "bg-transparent group-hover:bg-secondary"
    }`;

  return (
    <header className="sticky top-0 left-0 w-full z-[100] bg-white font-inter shadow-sm">
      <nav className="bg-white relative backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex justify-between items-center h-20">
          {/* === LOGO === */}
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
          {/* === DESKTOP NAV === */}
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
            {/* <li>
              <Link href="/products" className={navItemClass("/products")}>
                Products <span className={navItemBorderClass("/products")} />
              </Link>
            </li> */}
            <li>
              <Link href="/contact" className={navItemClass("/contact")}>
                Contact <span className={navItemBorderClass("/contact")} />
              </Link>
            </li>
          </ul>

          {/* === MOBILE TOGGLE === */}
          <button
            onClick={toggleMenu}
            className="lg:hidden cursor-pointer text-secondary focus:outline-none"
          >
            {!isMenuOpen && <AlignRight size={30} />}
          </button>
        </div>

        {/* === MOBILE MENU (FULL SCREEN) === */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed top-0 left-0 w-full h-screen bg-neutral z-[9999] text-primary flex flex-col px-6 pt-6 overflow-y-auto"
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
                <button onClick={closeMenu} className="text-primary">
                  <IoCloseSharp size={30} />
                </button>
              </div>

              <ul className="flex flex-col gap-6 text-lg font-medium text-primary mb-8">
                {[ 
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  // { href: "/products", label: "Products" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block py-2 ${
                        pathname === item.href
                          ? "text-secondary border-b-2 border-secondary"
                          : "hover:text-secondary"
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
    </header>
  );
};

export default Header;
