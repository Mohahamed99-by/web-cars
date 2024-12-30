import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Fleet', path: '/cars' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/careers' }
    ],
    services: [
      { name: 'Luxury Rentals', path: '/cars' },
      { name: 'Corporate Services', path: '/corporate' },
      { name: 'Wedding Cars', path: '/wedding' },
      { name: 'Airport Transfer', path: '/airport' }
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'FAQ', path: '/faq' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com' },
    { name: 'Twitter', icon: '📱', url: 'https://twitter.com' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block">
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-500 text-transparent bg-clip-text">
                  CarRental
                </span>
              </Link>
              <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-md">
                Experience luxury and performance with our premium car rental service. 
                Making every journey memorable with exceptional vehicles and service.
              </p>
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} CarRental. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms
              </Link>
              <Link
                to="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
