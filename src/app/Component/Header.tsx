"use client";
import { usePathname } from "next/navigation";

const buttonClass =
  "px-5 md:px-7 py-2 rounded-full text-xs md:text-sm font-medium transition ease-in-out duration-300";

export function Header() {
  const pathname = usePathname(); // Get the current pathname

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
      <div className="text-xl md:text-2xl font-bold text-gray-800 lg:ml-7">
        Manita <span className="text-gray-400">Panta</span>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-6 md:space-x-8 text-base md:text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`${
                  pathname === item.href ? "text-blue-500" : "text-gray-800"
                } hover:text-gray-600`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={`${buttonClass} lg:mr-7 bg-white border border-gray-300 hover:bg-gray-100 text-black`}
      >
        Let’s Talk
      </button>
    </header>
  );
}
