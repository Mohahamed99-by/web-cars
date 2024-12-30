import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/cars-site', label: 'Home' },
    { path: '/cars-site/cars', label: 'Our Fleet' },
    { path: '/cars-site/about', label: 'About Us' },
    { path: '/cars-site/contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{ '--navbar-height': 'calc(4rem + env(safe-area-inset-top))' }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 z-50 transform hover:scale-105 transition-transform"
          >
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-500 text-transparent bg-clip-text">
              CarRental
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`px-3 py-2 rounded-lg text-sm xl:text-base transition-all duration-300 ${
                  isActiveRoute(link.path)
                    ? 'text-white bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/cars" 
              className="bg-blue-500 text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 text-sm xl:text-base ml-2"
            >
              Rent Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={handleMobileMenuClick}
              className="p-2 rounded-lg hover:bg-gray-800/50 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between transform transition-all duration-300">
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 origin-left ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-px' : ''
                }`} />
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
                }`} />
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 origin-left ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-px' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-gray-900/98 backdrop-blur-md transition-all duration-300 lg:hidden ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          style={{ top: 'var(--navbar-height)' }}
        >
          <div className="bg-gray-800/95 backdrop-blur-md flex flex-col items-center justify-center min-h-[calc(100vh-var(--navbar-height))] space-y-6 p-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-lg sm:text-xl transition-colors relative group ${
                  isActiveRoute(link.path)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={handleMobileMenuClick}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                  isActiveRoute(link.path) ? 'w-full' : ''
                }`} />
              </Link>
            ))}
            <Link 
              to="/cars" 
              className="mt-4 bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 text-lg sm:text-xl"
              onClick={handleMobileMenuClick}
            >
              Rent Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
