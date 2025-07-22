import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';
import CarouselModal from './CarouselModal';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  bookingUrl: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "Spring's Awakening",
    description: "A light elderflower wine spritzer with notes of jasmine and honey.",
    details: "Celebrate the return of warmer days with floral cocktails and live acoustic melodies.",
    bookingUrl: "https://www.designmynight.com/london",
    image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 2,
    title: "Midnight Tales",
    description: "A bold red wine mulled with winter spices and orange peel.",
    details: "Gather by the fire for haunting folklore and spiced drinks until the clock strikes twelve.",
    bookingUrl: "https://www.designmynight.com/london",
    image: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 3,
    title: "The Lost Chapter",
    description: "A mysterious gin cocktail with lavender, sage, and a twist of fate.",
    details: "Unravel riddles over an evening of aromatic infusions and hidden stories.",
    bookingUrl: "https://www.designmynight.com/london",
    image: "https://images.pexels.com/photos/5947019/pexels-photo-5947019.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 4,
    title: "Quill's Secret",
    description: "An aged whiskey infused with vanilla and dark chocolate notes.",
    details: "Our storytellers share legendary myths while you savour deep, smoky drams.",
    bookingUrl: "https://www.designmynight.com/london",
    image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 5,
    title: "Feathered Dreams",
    description: "A champagne cocktail with elderflower and gold leaf.",
    details: "An elegant soirée above the city lights with effervescent bubbles and whimsical tales.",
    bookingUrl: "https://www.designmynight.com/london",
    image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

const SeasonalCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null);
  const itemsPerView = 3;
  const totalItems = carouselItems.length;

  const handleDiscover = (item: CarouselItem) => {
    setSelectedItem(item);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    let newIndex;
    if (direction === 'left') {
      newIndex = activeIndex === 0 ? totalItems - itemsPerView : activeIndex - 1;
    } else {
      newIndex = activeIndex >= totalItems - itemsPerView ? 0 : activeIndex + 1;
    }
    
    setActiveIndex(newIndex);
    
    const itemWidth = (carouselRef.current.offsetWidth + 32) / itemsPerView; // Account for gap
    carouselRef.current.scrollTo({
      left: newIndex * itemWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative py-24 bg-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="max-w-6xl mx-auto px-4 h-full">
          <div className="relative h-full">
            <div className="absolute -top-12 right-8 transform rotate-45">
              <div className="w-32 h-32 border-2 border-sepia"></div>
            </div>
            <div className="absolute bottom-8 left-12 transform -rotate-12">
              <div className="w-24 h-24 border border-sepia"></div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-serif text-3xl text-center mb-16 opacity-0 animate-fade-slide-up">
        Seasonal Folklore
        <div className="w-24 h-1 bg-sepia mx-auto mt-4"></div>
      </h2>
      
      <div className="flex items-center max-w-7xl mx-auto px-4">
        <button 
          onClick={() => scrollCarousel('left')} 
          className="hidden md:flex p-2 border border-sepia rounded-full mr-8 hover:bg-sepia hover:text-parchment transition-all duration-300 transform hover:scale-110"
          aria-label="Previous item"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div 
          ref={carouselRef}
          className="carousel-container flex gap-8 overflow-hidden"
        >
          {carouselItems.map((item, index) => (
            <div 
              key={item.id} 
              className="carousel-item flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] border border-sepia bg-parchment transform transition-all duration-500 hover:scale-[1.02] opacity-0 animate-fade-slide-up"
              style={{ 
                animationDelay: `${index * 200}ms`,
                transform: `translateX(-${activeIndex * 100}%)`
              }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                <p className="text-ink/80 mb-6">{item.description}</p>
                <Button
                  className="transform transition-all duration-300 hover:translate-x-2"
                  onClick={() => handleDiscover(item)}
                >
                  Discover
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => scrollCarousel('right')} 
          className="hidden md:flex p-2 border border-sepia rounded-full ml-8 hover:bg-sepia hover:text-parchment transition-all duration-300 transform hover:scale-110"
          aria-label="Next item"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="flex justify-center space-x-4 mt-8 md:hidden">
        <button
          onClick={() => scrollCarousel('left')}
          className="p-2 border border-sepia rounded-full hover:bg-sepia hover:text-parchment transition-all duration-300"
          aria-label="Previous item"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={() => scrollCarousel('right')}
          className="p-2 border border-sepia rounded-full hover:bg-sepia hover:text-parchment transition-all duration-300"
          aria-label="Next item"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <CarouselModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default SeasonalCarousel;