
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className={cn(
            "text-2xl font-bold transition-colors duration-300",
            isScrolled ? "text-hospital-700" : "text-white text-shadow"
          )}>
            Sparsh Hospital
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-hospital-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Departments", "Doctors", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "font-medium transition-colors duration-300",
                isScrolled ? "text-gray-700 hover:text-hospital-600" : "text-white hover:text-hospital-100 text-shadow"
              )}
            >
              {item}
            </a>
          ))}
          <Button className="bg-emergency-500 hover:bg-emergency-600 text-white">
            <PhoneCall className="mr-2 h-4 w-4" /> Emergency
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "absolute top-full left-0 right-0 bg-white shadow-md md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
          )}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {["Home", "About", "Departments", "Doctors", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-hospital-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-emergency-500 hover:bg-emergency-600 text-white">
              <PhoneCall className="mr-2 h-4 w-4" /> Emergency
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
