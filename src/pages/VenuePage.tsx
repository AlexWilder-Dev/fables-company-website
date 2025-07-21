import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import DrinkCard from '../components/DrinkCard';
import VenueNavigation from '../components/VenueNavigation';
import MenuModal from '../components/MenuModal';

const venues = {
  plume: {
    name: "PLUME",
    location: "Covent Garden",
    tagline: "Poetic Sips & Literary Musings",
    description: "Nestled in the heart of Covent Garden, Plume offers a sanctuary of refined tastes and quiet contemplation. Our curated wine selection favors the elegant and expressive.",
    hero: "https://images.pexels.com/photos/2531188/pexels-photo-2531188.jpeg?auto=compress&cs=tinysrgb&w=1600",
    drinks: [
      {
        name: "Goblet of Gossip",
        description: "A vibrant rosé with whispers of strawberry and secret notes of elderberry.",
        icon: 'wine' as const
      },
      {
        name: "Lady Grey Martini",
        description: "Earl Grey infused gin with a hint of bergamot and lemon twist.",
        icon: 'cocktail' as const
      }
    ],
    address: "42 Fancy Ln, London, UK",
    hours: "Mon-Thu: 4pm-11pm | Fri-Sat: 2pm-1am | Sun: 2pm-10pm",
    contact: "+44 20 7123 4567",
    menu: {
      plates: {
        title: "PLATES",
        items: [
          { name: "Squirrel Mixed Nuts", price: "£5" },
          { name: "Sourdough & Sea Salt Butter", price: "£9" },
          { name: "Gordal Olives in Spiced Oil", price: "£7" },
          { name: "Chorizo Rice & Paprika Oil", price: "" }
        ]
      },
      goldenBoy: {
        title: "Golden Boy",
        subtitle: "Seafood, Cheese",
        items: [
          "Three Cheese, Two Chutneys, Red Onions, Truffle Mayo",
          "Pickles with a Pint of Bitter"
        ]
      },
      boards: {
        title: "BOARDS",
        items: [
          { name: "British Cheese Board", description: "(Bath Soft, Cheddar & Stilton)", price: "£15" },
          { name: "Cured Meats Board", description: "(Serrano, Salami & Chorizo)", price: "£15" },
          { name: "All Aboard", description: "(Both Boards)", price: "" }
        ]
      },
      englishBrews: {
        title: "ENGLISH BREWS",
        subtitle: "A selection of Beers from Fresh Hideaway",
        description: "4.2% - 6.5% ABV",
        note: "NO SERVICE CHARGE",
        allergyNote: "ALLERGENS: Some of our food may contain nuts, gluten, dairy and other allergens. If you have any allergies or intolerances, please inform our team before ordering and they will be happy to help."
      },
      winesByGlass: {
        title: "WINES BY THE GLASS",
        subtitle: "All our wines by the glass are available by the bottle in the world map",
        wines: [
          { name: "Vintage Prosecco Brut, Montelvini", region: "Italy", price125: "7.5", price175: "", priceBottle: "" },
          { name: "Blanc de Blancs Champagne, Devaux", region: "France", price125: "", price175: "19.0", priceBottle: "" },
          { name: "Sauvignon Blanc, Oyster Bay", region: "New Zealand", price125: "", price175: "8.5", priceBottle: "" },
          { name: "Pét Nat Raisin Pacifie White Sauvignon", region: "Adelaide Hills, Australia", price125: "12.5", price175: "", priceBottle: "" },
          { name: "Chardonnay Reserva", region: "Undurraga, Colchagua, Chile", price125: "13.5", price175: "", priceBottle: "" },
          { name: "Grüner Veltliner, Weingut Geyerhof", region: "Austria", price125: "", price175: "11.0", priceBottle: "" },
          { name: "Horizon Brut Rosé", region: "England", price125: "15.5", price175: "", priceBottle: "" },
          { name: "Rosé Sancerre, Domaine de Montigny", region: "Loire, France", price125: "", price175: "14.0", priceBottle: "" },
          { name: "Red Sparkling, Lambrusco", region: "Emilia-Romagna, Italy", price125: "10.5", price175: "", priceBottle: "" },
          { name: "Valpolicella Ripasso, Ca'Rugate", region: "Veneto, Italy", price125: "", price175: "13.5", priceBottle: "" },
          { name: "Merlot, Undurraga Reserva", region: "Colchagua Valley, Chile", price125: "", price175: "", priceBottle: "£35" }
        ]
      },
      cocktails: {
        lowNo: [
          { name: "METROPOLITAN", price: "£10" },
          { name: "FRENCH 57" },
          { name: "ONCE IN A BLUE MOON" },
          { name: "CHILL-MANGO" },
          { name: "FOREST BRAMBLE" },
          { name: "BOTIVO SPARKLING APPLE" },
          { name: "GINGER NO-JITO" }
        ],
        cocktails: [
          { name: "PLUME BEE-GRONI", description: "250ml Gin, Honey & Campari" },
          { name: "MANGO PLUME FASHION", description: "Bourbon, Mango & Lime" },
          { name: "COVENT GARDEN PUNCH", description: "Rum, Spiced Rum, Coconut, Pineapple, Orange Juice" },
          { name: "ITALICUS PLUME", description: "Italicus, Gin, Elderflower, Prosecco" },
          { name: "SMOKEY JOES", description: "Co-Op Mezcal, Grapefruit, Lime & Salt" },
          { name: "CLEAR AND RITA", description: "Tequila Blanco, Cointreau, Lime" },
          { name: "THE RIVER", description: "El Rayo Tequila, Triple Sec, Lime & Aniseed" },
          { name: "PLEASED TO MEET YOU", description: "200ml Gin, Elderflower & Prosecco" }
        ],
        wine: {
          title: "0.5% WINE",
          subtitle: "BLANC DE BLANCS"
        },
        beer: {
          title: "BEER",
          note: "For classic cocktails, just free-pour and challenge the team"
        }
      }
    }
  },
  finch: {
    name: "FINCH",
    location: "Brixton",
    tagline: "Fair to Middling, Pleasantly Tipsy",
    description: "Bright and spirited, Finch brings a contemporary flair to Brixton's vibrant scene. Our selection celebrates the bold and the beautiful with wines that sing and cocktails that dance.",
    hero: "https://images.pexels.com/photos/2303337/pexels-photo-2303337.jpeg?auto=compress&cs=tinysrgb&w=1600",
    drinks: [
      {
        name: "Chatter & Claret",
        description: "A robust red with notes of blackberry, cedar, and a hint of chocolate.",
        icon: 'wine' as const
      },
      {
        name: "Stoops to Conquer",
        description: "Bourbon, amaretto, and bitters with a theatrical orange flame.",
        icon: 'cocktail' as const
      }
    ],
    address: "28 Vibrant St, London, UK",
    hours: "Mon-Thu: 4pm-11pm | Fri-Sat: 2pm-1am | Sun: 2pm-10pm",
    contact: "+44 20 7123 8901",
    menu: {
      plates: {
        title: "PLATES",
        items: [
          { name: "Squirrel Mixed Nuts", price: "£5" },
          { name: "Sourdough & Sea Salt Butter", price: "£9" },
          { name: "Gordal Olives in Spiced Oil", price: "£7" },
          { name: "Chorizo Rice & Paprika Oil", price: "" }
        ]
      },
      goldenBoy: {
        title: "Golden Boy",
        subtitle: "Seafood, Cheese",
        items: [
          "Three Cheese, Two Chutneys, Red Onions, Truffle Mayo",
          "Pickles with a Pint of Bitter"
        ]
      },
      boards: {
        title: "BOARDS",
        items: [
          { name: "British Cheese Board", description: "(Bath Soft, Cheddar & Stilton)", price: "£15" },
          { name: "Cured Meats Board", description: "(Serrano, Salami & Chorizo)", price: "£15" },
          { name: "All Aboard", description: "(Both Boards)", price: "" }
        ]
      },
      englishBrews: {
        title: "ENGLISH BREWS",
        subtitle: "A selection of Beers from Fresh Hideaway",
        description: "4.2% - 6.5% ABV",
        note: "NO SERVICE CHARGE",
        allergyNote: "ALLERGENS: Some of our food may contain nuts, gluten, dairy and other allergens. If you have any allergies or intolerances, please inform our team before ordering and they will be happy to help."
      },
      winesByGlass: {
        title: "WINES BY THE GLASS",
        subtitle: "All our wines by the glass are available by the bottle in the world map",
        wines: [
          { name: "Vintage Prosecco Brut, Montelvini", region: "Italy", price125: "7.5", price175: "", priceBottle: "" },
          { name: "Blanc de Blancs Champagne, Devaux", region: "France", price125: "", price175: "19.0", priceBottle: "" },
          { name: "Sauvignon Blanc, Oyster Bay", region: "New Zealand", price125: "", price175: "8.5", priceBottle: "" },
          { name: "Pét Nat Raisin Pacifie White Sauvignon", region: "Adelaide Hills, Australia", price125: "12.5", price175: "", priceBottle: "" },
          { name: "Chardonnay Reserva", region: "Undurraga, Colchagua, Chile", price125: "13.5", price175: "", priceBottle: "" },
          { name: "Grüner Veltliner, Weingut Geyerhof", region: "Austria", price125: "", price175: "11.0", priceBottle: "" },
          { name: "Horizon Brut Rosé", region: "England", price125: "15.5", price175: "", priceBottle: "" },
          { name: "Rosé Sancerre, Domaine de Montigny", region: "Loire, France", price125: "", price175: "14.0", priceBottle: "" },
          { name: "Red Sparkling, Lambrusco", region: "Emilia-Romagna, Italy", price125: "10.5", price175: "", priceBottle: "" },
          { name: "Valpolicella Ripasso, Ca'Rugate", region: "Veneto, Italy", price125: "", price175: "13.5", priceBottle: "" },
          { name: "Merlot, Undurraga Reserva", region: "Colchagua Valley, Chile", price125: "", price175: "", priceBottle: "£35" }
        ]
      },
      cocktails: {
        lowNo: [
          { name: "METROPOLITAN", price: "£10" },
          { name: "FRENCH 57" },
          { name: "ONCE IN A BLUE MOON" },
          { name: "CHILL-MANGO" },
          { name: "FOREST BRAMBLE" },
          { name: "BOTIVO SPARKLING APPLE" },
          { name: "GINGER NO-JITO" }
        ],
        cocktails: [
          { name: "FINCH BEE-GRONI", description: "250ml Gin, Honey & Campari" },
          { name: "MANGO FINCH FASHION", description: "Bourbon, Mango & Lime" },
          { name: "BRIXTON PUNCH", description: "Rum, Spiced Rum, Coconut, Pineapple, Orange Juice" },
          { name: "ITALICUS FINCH", description: "Italicus, Gin, Elderflower, Prosecco" },
          { name: "SMOKEY JOES", description: "Co-Op Mezcal, Grapefruit, Lime & Salt" },
          { name: "CLEAR AND RITA", description: "Tequila Blanco, Cointreau, Lime" },
          { name: "THE RIVER", description: "El Rayo Tequila, Triple Sec, Lime & Aniseed" },
          { name: "PLEASED TO MEET YOU", description: "200ml Gin, Elderflower & Prosecco" }
        ],
        wine: {
          title: "0.5% WINE",
          subtitle: "BLANC DE BLANCS"
        },
        beer: {
          title: "BEER",
          note: "For classic cocktails, just free-pour and challenge the team"
        }
      }
    }
  },
  robin: {
    name: "ROBIN",
    location: "Southbank Market",
    tagline: "Bold Narratives, Warm Welcomes",
    description: "Robin offers a cozy retreat amidst the bustle of Southbank Market. Our space feels like returning to a familiar story with wines that comfort and cocktails that intrigue.",
    hero: "https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=1600",
    drinks: [
      {
        name: "Redbreast Reserve",
        description: "A warming Shiraz with notes of plum, pepper, and a touch of oak.",
        icon: 'wine' as const
      },
      {
        name: "Songbird Spritz",
        description: "Aperol, prosecco, and a melodic twist of orange and rosemary.",
        icon: 'cocktail' as const
      }
    ],
    address: "15 Market Row, London, UK",
    hours: "Mon-Thu: 4pm-11pm | Fri-Sat: 2pm-1am | Sun: 2pm-10pm",
    contact: "+44 20 7123 5678",
    menu: {
      plates: {
        title: "PLATES",
        items: [
          { name: "Squirrel Mixed Nuts", price: "£5" },
          { name: "Sourdough & Sea Salt Butter", price: "£9" },
          { name: "Gordal Olives in Spiced Oil", price: "£7" },
          { name: "Chorizo Rice & Paprika Oil", price: "" }
        ]
      },
      goldenBoy: {
        title: "Golden Boy",
        subtitle: "Seafood, Cheese",
        items: [
          "Three Cheese, Two Chutneys, Red Onions, Truffle Mayo",
          "Pickles with a Pint of Bitter"
        ]
      },
      boards: {
        title: "BOARDS",
        items: [
          { name: "British Cheese Board", description: "(Bath Soft, Cheddar & Stilton)", price: "£15" },
          { name: "Cured Meats Board", description: "(Serrano, Salami & Chorizo)", price: "£15" },
          { name: "All Aboard", description: "(Both Boards)", price: "" }
        ]
      },
      englishBrews: {
        title: "ENGLISH BREWS",
        subtitle: "A selection of Beers from Fresh Hideaway",
        description: "4.2% - 6.5% ABV",
        note: "NO SERVICE CHARGE",
        allergyNote: "ALLERGENS: Some of our food may contain nuts, gluten, dairy and other allergens. If you have any allergies or intolerances, please inform our team before ordering and they will be happy to help."
      },
      winesByGlass: {
        title: "WINES BY THE GLASS",
        subtitle: "All our wines by the glass are available by the bottle in the world map",
        wines: [
          { name: "Vintage Prosecco Brut, Montelvini", region: "Italy", price125: "7.5", price175: "", priceBottle: "" },
          { name: "Blanc de Blancs Champagne, Devaux", region: "France", price125: "", price175: "19.0", priceBottle: "" },
          { name: "Sauvignon Blanc, Oyster Bay", region: "New Zealand", price125: "", price175: "8.5", priceBottle: "" },
          { name: "Pét Nat Raisin Pacifie White Sauvignon", region: "Adelaide Hills, Australia", price125: "12.5", price175: "", priceBottle: "" },
          { name: "Chardonnay Reserva", region: "Undurraga, Colchagua, Chile", price125: "13.5", price175: "", priceBottle: "" },
          { name: "Grüner Veltliner, Weingut Geyerhof", region: "Austria", price125: "", price175: "11.0", priceBottle: "" },
          { name: "Horizon Brut Rosé", region: "England", price125: "15.5", price175: "", priceBottle: "" },
          { name: "Rosé Sancerre, Domaine de Montigny", region: "Loire, France", price125: "", price175: "14.0", priceBottle: "" },
          { name: "Red Sparkling, Lambrusco", region: "Emilia-Romagna, Italy", price125: "10.5", price175: "", priceBottle: "" },
          { name: "Valpolicella Ripasso, Ca'Rugate", region: "Veneto, Italy", price125: "", price175: "13.5", priceBottle: "" },
          { name: "Merlot, Undurraga Reserva", region: "Colchagua Valley, Chile", price125: "", price175: "", priceBottle: "£35" }
        ]
      },
      cocktails: {
        lowNo: [
          { name: "METROPOLITAN", price: "£10" },
          { name: "FRENCH 57" },
          { name: "ONCE IN A BLUE MOON" },
          { name: "CHILL-MANGO" },
          { name: "FOREST BRAMBLE" },
          { name: "BOTIVO SPARKLING APPLE" },
          { name: "GINGER NO-JITO" }
        ],
        cocktails: [
          { name: "ROBIN BEE-GRONI", description: "250ml Gin, Honey & Campari" },
          { name: "MANGO ROBIN FASHION", description: "Bourbon, Mango & Lime" },
          { name: "SOUTHBANK PUNCH", description: "Rum, Spiced Rum, Coconut, Pineapple, Orange Juice" },
          { name: "ITALICUS ROBIN", description: "Italicus, Gin, Elderflower, Prosecco" },
          { name: "SMOKEY JOES", description: "Co-Op Mezcal, Grapefruit, Lime & Salt" },
          { name: "CLEAR AND RITA", description: "Tequila Blanco, Cointreau, Lime" },
          { name: "THE RIVER", description: "El Rayo Tequila, Triple Sec, Lime & Aniseed" },
          { name: "PLEASED TO MEET YOU", description: "200ml Gin, Elderflower & Prosecco" }
        ],
        wine: {
          title: "0.5% WINE",
          subtitle: "BLANC DE BLANCS"
        },
        beer: {
          title: "BEER",
          note: "For classic cocktails, just free-pour and challenge the team"
        }
      }
    }
  },
  quill: {
    name: "QUILL",
    location: "Borough Yards",
    tagline: "Where Stories Unfold",
    description: "In the historic setting of Borough Yards, Quill is our most intimate venue. The exposed brick walls have witnessed centuries of London life, now complemented by thoughtfully selected wines and artfully crafted cocktails.",
    hero: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1600",
    drinks: [
      {
        name: "Inkwell Noir",
        description: "A deep, complex Malbec with dark fruit notes and a velvety finish.",
        icon: 'wine' as const
      },
      {
        name: "Quill & Quiver",
        description: "Vodka, blackberry, sage, and a splash of champagne for sparkle.",
        icon: 'cocktail' as const
      }
    ],
    address: "7 Yard Lane, London, UK",
    hours: "Mon-Thu: 4pm-11pm | Fri-Sat: 2pm-1am | Sun: 2pm-10pm",
    contact: "+44 20 7123 3456",
    menu: {
      plates: {
        title: "PLATES",
        items: [
          { name: "Squirrel Mixed Nuts", price: "£5" },
          { name: "Sourdough & Sea Salt Butter", price: "£9" },
          { name: "Gordal Olives in Spiced Oil", price: "£7" },
          { name: "Chorizo Rice & Paprika Oil", price: "" }
        ]
      },
      goldenBoy: {
        title: "Golden Boy",
        subtitle: "Seafood, Cheese",
        items: [
          "Three Cheese, Two Chutneys, Red Onions, Truffle Mayo",
          "Pickles with a Pint of Bitter"
        ]
      },
      boards: {
        title: "BOARDS",
        items: [
          { name: "British Cheese Board", description: "(Bath Soft, Cheddar & Stilton)", price: "£15" },
          { name: "Cured Meats Board", description: "(Serrano, Salami & Chorizo)", price: "£15" },
          { name: "All Aboard", description: "(Both Boards)", price: "" }
        ]
      },
      englishBrews: {
        title: "ENGLISH BREWS",
        subtitle: "A selection of Beers from Fresh Hideaway",
        description: "4.2% - 6.5% ABV",
        note: "NO SERVICE CHARGE",
        allergyNote: "ALLERGENS: Some of our food may contain nuts, gluten, dairy and other allergens. If you have any allergies or intolerances, please inform our team before ordering and they will be happy to help."
      },
      winesByGlass: {
        title: "WINES BY THE GLASS",
        subtitle: "All our wines by the glass are available by the bottle in the world map",
        wines: [
          { name: "Vintage Prosecco Brut, Montelvini", region: "Italy", price125: "7.5", price175: "", priceBottle: "" },
          { name: "Blanc de Blancs Champagne, Devaux", region: "France", price125: "", price175: "19.0", priceBottle: "" },
          { name: "Sauvignon Blanc, Oyster Bay", region: "New Zealand", price125: "", price175: "8.5", priceBottle: "" },
          { name: "Pét Nat Raisin Pacifie White Sauvignon", region: "Adelaide Hills, Australia", price125: "12.5", price175: "", priceBottle: "" },
          { name: "Chardonnay Reserva", region: "Undurraga, Colchagua, Chile", price125: "13.5", price175: "", priceBottle: "" },
          { name: "Grüner Veltliner, Weingut Geyerhof", region: "Austria", price125: "", price175: "11.0", priceBottle: "" },
          { name: "Horizon Brut Rosé", region: "England", price125: "15.5", price175: "", priceBottle: "" },
          { name: "Rosé Sancerre, Domaine de Montigny", region: "Loire, France", price125: "", price175: "14.0", priceBottle: "" },
          { name: "Red Sparkling, Lambrusco", region: "Emilia-Romagna, Italy", price125: "10.5", price175: "", priceBottle: "" },
          { name: "Valpolicella Ripasso, Ca'Rugate", region: "Veneto, Italy", price125: "", price175: "13.5", priceBottle: "" },
          { name: "Merlot, Undurraga Reserva", region: "Colchagua Valley, Chile", price125: "", price175: "", priceBottle: "£35" }
        ]
      },
      cocktails: {
        lowNo: [
          { name: "METROPOLITAN", price: "£10" },
          { name: "FRENCH 57" },
          { name: "ONCE IN A BLUE MOON" },
          { name: "CHILL-MANGO" },
          { name: "FOREST BRAMBLE" },
          { name: "BOTIVO SPARKLING APPLE" },
          { name: "GINGER NO-JITO" }
        ],
        cocktails: [
          { name: "QUILL BEE-GRONI", description: "250ml Gin, Honey & Campari" },
          { name: "MANGO QUILL FASHION", description: "Bourbon, Mango & Lime" },
          { name: "BOROUGH PUNCH", description: "Rum, Spiced Rum, Coconut, Pineapple, Orange Juice" },
          { name: "ITALICUS QUILL", description: "Italicus, Gin, Elderflower, Prosecco" },
          { name: "SMOKEY JOES", description: "Co-Op Mezcal, Grapefruit, Lime & Salt" },
          { name: "CLEAR AND RITA", description: "Tequila Blanco, Cointreau, Lime" },
          { name: "THE RIVER", description: "El Rayo Tequila, Triple Sec, Lime & Aniseed" },
          { name: "PLEASED TO MEET YOU", description: "200ml Gin, Elderflower & Prosecco" }
        ],
        wine: {
          title: "0.5% WINE",
          subtitle: "BLANC DE BLANCS"
        },
        beer: {
          title: "BEER",
          note: "For classic cocktails, just free-pour and challenge the team"
        }
      }
    }
  }
};

const VenuePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const venue = venues[slug as keyof typeof venues];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  if (!venue) {
    return <div className="container mx-auto px-4 py-16">Venue not found</div>;
  }

  const handleBookTable = () => {
    window.open(`https://www.opentable.com/restref/client/?restref=${venue.name}`, '_blank');
  };

  const handleViewMenu = () => {
    if (venue.menu) {
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="section-animate">
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-ink -z-10">
          <img 
            src={venue.hero} 
            alt={venue.name} 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="max-w-3xl mx-auto text-center text-parchment p-4 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl mb-2 hero-text">{venue.name}</h1>
          <p className="text-xl mb-1">{venue.location}</p>
          <p className="font-script text-2xl mb-8">{venue.tagline}</p>
          {venue.menu ? (
            <Button onClick={handleViewMenu}>
              View Full Menu
            </Button>
          ) : (
            <Button>
              View Menu
            </Button>
          )}
        </div>
      </section>
      
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="mb-4 text-lg">
            {venue.description}
          </p>
        </div>
        
        <h2 className="font-serif text-3xl text-center mb-8">STORIES & SAMPLES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {venue.drinks.map((drink, index) => (
            <DrinkCard 
              key={index}
              name={drink.name}
              description={drink.description}
              icon={drink.icon}
            />
          ))}
        </div>
      </section>
      
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-center mb-8">WHERE & WHEN</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="decorative-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-serif text-xl mb-2">Address</h3>
                  <p className="mb-4">{venue.address}</p>
                  
                  <h3 className="font-serif text-xl mb-2">Opening Hours</h3>
                  <p className="mb-4">{venue.hours}</p>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl mb-2">Reservations</h3>
                  <p className="mb-4">{venue.contact}</p>
                  
                  <Button 
                    className="w-full mt-4"
                    onClick={handleBookTable}
                  >
                    Book a Table
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VenueNavigation currentSlug={slug} />
      
      <MenuModal 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        venue={venue}
      />
    </div>
  );
};

export default VenuePage;