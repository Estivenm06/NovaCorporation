"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { User } from "../lib/definitions";

const Header = ({ user, setUser }: { user: User | null, setUser: (user: User | null) => void }) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/img/Logo.webp"
              alt="Logo"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-transparent"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 text-white">
              <li className="transform hover:scale-110 transition-transform duration-300">
                <Link
                  href="/"
                  className="text-lg hover:text-gray-200 transition-colors duration-300"
                >
                  Inicio
                </Link>
              </li>
              {user === null && (
                <>
                  <li className="transform hover:scale-110 transition-transform duration-300">
                    <Link
                      href="/login"
                      className="text-lg hover:text-gray-200 transition-colors duration-300"
                    >
                      Iniciar sesión
                    </Link>
                  </li>
                  <li className="transform hover:scale-110 transition-transform duration-300">
                    <Link
                      href="/register"
                      className="text-lg hover:text-gray-200 transition-colors duration-300"
                    >
                      Registrarse
                    </Link>
                  </li>
                </>
              )}

              <li className="transform hover:scale-110 transition-transform duration-300">
                <Link
                  href="/plans#reviews"
                  className="text-lg hover:text-gray-200 transition-colors duration-300"
                >
                  Reseñas
                </Link>
              </li>
              <li className="transform hover:scale-110 transition-transform duration-300">
                <Link
                  href="/#services"
                  className="text-lg hover:text-gray-200 transition-colors duration-300"
                >
                  Servicios
                </Link>
              </li>
              {user !== null && (
              <li className="transform hover:scale-105 transition-transform duration-300">
                <Link
                  href="/"
                  className="block text-xl py-2 hover:text-gray-200 transition-colors duration-300"
                  onClick={() => {
                    localStorage.removeItem("user");
                    setUser(null);
                    setNavbar(false);
                  }}
                >
                  Cerrar Sesión
                </Link>
              </li>
            )}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1 cursor-pointer transition-all duration-300 hover:scale-110"
            onClick={() => setNavbar(!navbar)}
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                navbar ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                navbar ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                navbar ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            navbar ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-white pb-4">
            <li className="transform hover:scale-105 transition-transform duration-300">
              <Link
                href="/"
                className="block text-xl py-2 hover:text-gray-200 transition-colors duration-300"
                onClick={() => setNavbar(false)}
              >
                Inicio
              </Link>
            </li>
            {user === null && (
              <>
                <li className="transform hover:scale-105 transition-transform duration-300">
                  <Link
                    href="/login"
                    className="block text-xl py-2 hover:text-gray-200 transition-colors duration-300"
                    onClick={() => setNavbar(false)}
                  >
                    Iniciar sesión
                  </Link>
                </li>
                <li className="transform hover:scale-105 transition-transform duration-300">
                  <Link
                    href="/register"
                    className="block text-xl py-2 hover:text-gray-200 transition-colors duration-300"
                    onClick={() => setNavbar(false)}
                  >
                    Registrarse
                  </Link>
                </li>
              </>
            )}
            <li className="transform hover:scale-105 transition-transform duration-300">
              <Link
                href="/plans#reviews"
                className="block text-xl py-2 hover:text-gray-200 transition-colors duration-300"
                onClick={() => setNavbar(false)}
              >
                Reseñas
              </Link>
            </li>
            <li className="transform hover:scale-105 transition-transform duration-300">
              <Link
                href="/#services"
                className="block text-xl py-2 hover:text-gray-200 transition-colors duration-300"
                onClick={() => setNavbar(false)}
              >
                Servicios
              </Link>
            </li>
            {user !== null && (
              <li className="transform hover:scale-105 transition-transform duration-300">
                <Link
                  href="/"
                  className="block text-xl py-2 hover:text-gray-200 transition-colors duration-300"
                  onClick={() => {
                    localStorage.removeItem("user");
                    setUser(null);
                    setNavbar(false);
                  }}
                >
                  Cerrar Sesión
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
