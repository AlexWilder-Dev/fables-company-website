import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import Newsletter from './Newsletter';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-sepia mt-16 pt-12 pb-8 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-xl mb-4">Fables & Company</h3>
            <p className="mb-4 text-ink/80">
              Purveyors of fine wines and literary spirits since 2019. Each sip tells a story, each glass a chapter.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="text-ink hover:text-sepia transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="text-ink hover:text-sepia transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="text-ink hover:text-sepia transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">The Flock</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/venue/plume" className="text-ink hover:text-sepia transition-colors">
                  Plume - Covent Garden
                </Link>
              </li>
              <li>
                <Link to="/venue/finch" className="text-ink hover:text-sepia transition-colors">
                  Finch - Brixton
                </Link>
              </li>
              <li>
                <Link to="/venue/robin" className="text-ink hover:text-sepia transition-colors">
                  Robin - Southbank Market
                </Link>
              </li>
              <li>
                <Link to="/venue/quill" className="text-ink hover:text-sepia transition-colors">
                  Quill - Borough Yards
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4 flex items-center">
              <Mail size={20} className="mr-2" />
              <span>PigeonMail</span>
            </h3>
            <p className="mb-4 text-ink/80">
              Subscribe to our newsletter for seasonal folklore, events, and special offers.
            </p>
            <Newsletter />
          </div>
        </div>
        
        <div className="feather-divider mt-12"></div>
        
        <div className="text-center">
          <p className="text-sm text-ink/60">
            © {new Date().getFullYear()} Fables & Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;