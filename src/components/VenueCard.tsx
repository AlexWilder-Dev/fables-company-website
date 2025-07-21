import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface VenueCardProps {
  name: string;
  location: string;
  slug: string;
  logoUrl: string;
}

const VenueCard: React.FC<VenueCardProps> = ({ name, location, slug, logoUrl }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/venue/${slug}`);
  };

  const handleMapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(`${name} ${location} London`)}`, '_blank');
  };

  return (
    <div 
      className="venue-card border border-sepia p-8 relative overflow-hidden group cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="block">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 border-2 border-sepia rounded-full flex items-center justify-center bg-cream">
            <span className="font-script text-2xl text-sepia">{name.charAt(0)}</span>
          </div>
        </div>
        
        <h3 className="font-serif text-3xl text-center mb-2">{name}</h3>
        <p className="text-center text-ink/80">{location}</p>
        
        <div className="mt-4 h-0.5 bg-sepia bg-opacity-30 w-1/3 mx-auto"></div>
        
        <div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sepia">Discover the Story →</span>
        </div>
      </div>
      
      <button
        onClick={handleMapClick}
        className="absolute top-4 right-4 p-2 text-ink hover:text-sepia transition-colors"
        aria-label="View on map"
      >
        <MapPin size={20} />
      </button>
    </div>
  );
};

export default VenueCard;