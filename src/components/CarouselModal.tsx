import React from 'react';
import { X } from 'lucide-react';
import Button from './Button';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  bookingUrl: string;
}

interface CarouselModalProps {
  item: CarouselItem | null;
  onClose: () => void;
}

const CarouselModal: React.FC<CarouselModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const handleBook = () => {
    window.open(item.bookingUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink bg-opacity-75" onClick={onClose} />
      <div className="relative bg-parchment max-w-md w-full border border-sepia p-8 text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-parchment border border-sepia rounded-full hover:bg-sepia hover:text-parchment transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        <h3 className="font-serif text-3xl mb-4">{item.title}</h3>
        <p className="mb-6">{item.details}</p>
        <Button onClick={handleBook}>Book</Button>
      </div>
    </div>
  );
};

export default CarouselModal;
