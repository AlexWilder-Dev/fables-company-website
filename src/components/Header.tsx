import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wine, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleNavClick = () => {
    closeMenu();
    // Scroll to top when navigating
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const locations = [
    { path: '/venue/plume', label: 'Plume', subtitle: 'Covent Garden' },
    { path: '/venue/finch', label: 'Finch', subtitle: 'Brixton' },
    { path: '/venue/robin', label: 'Robin', subtitle: 'Southbank Market' },
    { path: '/venue/quill', label: 'Quill', subtitle: 'Borough Yards' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-parchment bg-opacity-95 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="z-50" onClick={handleNavClick}>
          <h1 className="font-script text-4xl md:text-5xl text-ink logo-glow transition-all duration-300 hover:text-sepia">
            Fables & Company
          </h1>
        </Link>
        
        <button 
          className={`z-50 p-2 rounded-full border border-transparent transition-all duration-500 ${
            isMenuOpen ? 'rotate-90 border-sepia' : 'hover:border-sepia'
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
        
        <div 
          className={`fixed inset-0 bg-gradient-to-b from-parchment to-cream transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-98 visible' : 'opacity-0 invisible'
          }`}
          onClick={closeMenu}
        />
        
        <nav 
          className={`
            fixed inset-0 flex items-center justify-center
            transition-all duration-700 ease-out
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
        >
          <div className="relative w-full max-w-2xl mx-auto px-6">
            <div className="absolute -top-32 -right-32 w-64 h-64 border border-sepia/20 rounded-full transform rotate-45" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 border border-sepia/20 rounded-full transform -rotate-12" />
            
            <ul className="relative space-y-12 py-8">
              <li className="nav-item text-center">
                <Link 
                  to="/" 
                  className={`block font-serif text-5xl hover:text-sepia transition-all duration-300 transform hover:translate-x-2 ${
                    location.pathname === '/' ? 'text-sepia' : 'text-ink'
                  }`}
                  onClick={handleNavClick}
                >
                  Home
                </Link>
              </li>
              
              <li className="nav-item">
                <div className="text-center space-y-6">
                  <h2 className="font-serif text-5xl text-ink flex items-center justify-center gap-4">
                    <Wine size={32} />
                    Locations
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    {locations.map((item, index) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="group p-4 border border-sepia/20 rounded-lg hover:border-sepia transition-all duration-300 transform hover:translate-y--1"
                        onClick={handleNavClick}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="font-serif text-2xl group-hover:text-sepia transition-colors">
                          {item.label}
                        </div>
                        <div className="text-sm text-ink/60">{item.subtitle}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              
              <li className="nav-item text-center">
                <Link 
                  to="/events" 
                  className={`block font-serif text-5xl hover:text-sepia transition-all duration-300 transform hover:translate-x-2 ${
                    location.pathname === '/events' ? 'text-sepia' : 'text-ink'
                  }`}
                  onClick={handleNavClick}
                >
                  <span className="flex items-center justify-center gap-4">
                    <Calendar size={32} />
                    Events
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;