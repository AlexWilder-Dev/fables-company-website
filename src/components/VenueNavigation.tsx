import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface VenueNavigationProps {
  currentSlug: string;
}

const venues = [
  { slug: 'plume', name: 'Plume' },
  { slug: 'finch', name: 'Finch' },
  { slug: 'robin', name: 'Robin' },
  { slug: 'quill', name: 'Quill' }
];

const VenueNavigation: React.FC<VenueNavigationProps> = ({ currentSlug }) => {
  const currentIndex = venues.findIndex(venue => venue.slug === currentSlug);
  const prevVenue = venues[currentIndex - 1] || venues[venues.length - 1];
  const nextVenue = venues[currentIndex + 1] || venues[0];

  return (
    <div className="flex justify-between items-center max-w-4xl mx-auto mt-16 px-4">
      <Link
        to={`/venue/${prevVenue.slug}`}
        className="flex items-center space-x-2 text-ink hover:text-sepia transition-colors"
      >
        <ArrowLeft size={24} />
        <span className="font-serif text-xl">{prevVenue.name}</span>
      </Link>
      
      <Link
        to={`/venue/${nextVenue.slug}`}
        className="flex items-center space-x-2 text-ink hover:text-sepia transition-colors"
      >
        <span className="font-serif text-xl">{nextVenue.name}</span>
        <ArrowRight size={24} />
      </Link>
    </div>
  );
};

export default VenueNavigation;