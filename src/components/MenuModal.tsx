import React from 'react';
import { X } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  venue: any;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, venue }) => {
  if (!isOpen || !venue.menu) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-ink bg-opacity-75"
        onClick={onClose}
      />
      
      <div className="relative bg-parchment max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-sepia">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-parchment border border-sepia rounded-full hover:bg-sepia hover:text-parchment transition-colors"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
        
        <div className="p-8">
          <h2 className="font-serif text-4xl text-center mb-12">{venue.name} MENU</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Plates */}
              <div className="decorative-border">
                <h3 className="font-serif text-2xl mb-4 text-center">{venue.menu.plates.title}</h3>
                <div className="space-y-2">
                  {venue.menu.plates.items.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      {item.price && <span>{item.price}</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Golden Boy */}
              <div className="decorative-border">
                <h3 className="font-script text-3xl mb-2 text-center text-sepia">{venue.menu.goldenBoy.title}</h3>
                <p className="text-center italic mb-4">{venue.menu.goldenBoy.subtitle}</p>
                <div className="space-y-1 text-center">
                  {venue.menu.goldenBoy.items.map((item: string, index: number) => (
                    <p key={index} className="text-sm">{item}</p>
                  ))}
                </div>
              </div>

              {/* Boards */}
              <div className="decorative-border">
                <h3 className="font-serif text-2xl mb-4 text-center">{venue.menu.boards.title}</h3>
                <div className="space-y-3">
                  {venue.menu.boards.items.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between items-start">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        {item.description && <span className="text-sm text-ink/70 ml-2">{item.description}</span>}
                      </div>
                      {item.price && <span>{item.price}</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* English Brews */}
              <div className="decorative-border">
                <h3 className="font-serif text-2xl mb-2 text-center">{venue.menu.englishBrews.title}</h3>
                <p className="text-center italic mb-2">{venue.menu.englishBrews.subtitle}</p>
                <p className="text-center text-sm mb-4">{venue.menu.englishBrews.description}</p>
                <div className="text-xs space-y-1">
                  <p className="font-medium">{venue.menu.englishBrews.note}</p>
                  <p>{venue.menu.englishBrews.allergyNote}</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Wines by Glass */}
              <div className="decorative-border">
                <h3 className="font-serif text-2xl mb-2 text-center">{venue.menu.winesByGlass.title}</h3>
                <p className="text-center text-sm italic mb-6">{venue.menu.winesByGlass.subtitle}</p>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-4 gap-2 text-xs font-medium border-b pb-2">
                    <span>Wine</span>
                    <span>Region</span>
                    <span>125ml</span>
                    <span>175ml/Btl</span>
                  </div>
                  
                  {venue.menu.winesByGlass.wines.map((wine: any, index: number) => (
                    <div key={index} className="grid grid-cols-4 gap-2 text-sm">
                      <span className="font-medium">{wine.name}</span>
                      <span className="text-ink/70">{wine.region}</span>
                      <span>{wine.price125}</span>
                      <span>{wine.price175 || wine.priceBottle}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cocktails */}
              <div className="decorative-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Low & No */}
                  <div>
                    <h3 className="font-serif text-xl mb-4 text-center">Low & No</h3>
                    <h4 className="font-serif text-lg mb-3">COCKTAILS</h4>
                    <div className="space-y-2 text-sm">
                      {venue.menu.cocktails.lowNo.map((item: any, index: number) => (
                        <div key={index} className="flex justify-between">
                          <span>{item.name}</span>
                          {item.price && <span>{item.price}</span>}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-3 border border-sepia/30">
                      <h4 className="font-serif text-sm mb-1">{venue.menu.cocktails.wine.title}</h4>
                      <p className="text-xs">{venue.menu.cocktails.wine.subtitle}</p>
                      <div className="mt-2">
                        <h4 className="font-serif text-sm">{venue.menu.cocktails.beer.title}</h4>
                      </div>
                    </div>
                  </div>

                  {/* Cocktails */}
                  <div>
                    <h3 className="font-serif text-xl mb-4 text-center">Cocktails</h3>
                    <div className="space-y-3 text-sm">
                      {venue.menu.cocktails.cocktails.map((item: any, index: number) => (
                        <div key={index}>
                          <div className="font-medium">{item.name}</div>
                          {item.description && <div className="text-xs text-ink/70">{item.description}</div>}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 text-xs italic text-center">
                      {venue.menu.cocktails.beer.note}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;