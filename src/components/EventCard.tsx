import React from 'react';
import Button from './Button';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, time, venue, description }) => {
  return (
    <div className="decorative-border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl mb-2">{title}</h3>
          <p className="mb-4 italic text-sepia">{date} • {time} • {venue}</p>
          <p className="mb-6">{description}</p>
          <Button>Reserve a Spot</Button>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-sepia rounded-full flex items-center justify-center">
            <span className="font-script text-2xl text-sepia">{date.split(',')[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;