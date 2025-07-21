import React from 'react';
import Button from '../components/Button';
import VenueCard from '../components/VenueCard';
import SeasonalCarousel from '../components/SeasonalCarousel';

const venues = [
  {
    name: "PLUME",
    location: "Covent Garden",
    slug: "plume",
    logoUrl: "/plume-logo.png"
  },
  {
    name: "FINCH",
    location: "Brixton",
    slug: "finch",
    logoUrl: "/finch-logo.png"
  },
  {
    name: "ROBIN",
    location: "Southbank Market",
    slug: "robin",
    logoUrl: "/robin-logo.png"
  },
  {
    name: "QUILL",
    location: "Borough Yards",
    slug: "quill",
    logoUrl: "/quill-logo.png"
  }
];

const HomePage: React.FC = () => {
  const scrollToTale = () => {
    const taleSection = document.getElementById('our-tale');
    if (taleSection) {
      taleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <section className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
        <div className="absolute inset-0 bg-ink -z-10">
          <img 
            src="https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg"
            alt="Bacchus themed wine setting" 
            className="w-full h-full object-cover opacity-40 transition-transform duration-10000 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 to-transparent"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center text-parchment relative z-10">
          <h1 className="font-serif text-4xl md:text-6xl mb-4 hero-text opacity-0 animate-fade-slide-up">
            A Story in Every Sip
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-0 animate-fade-slide-up" style={{ animationDelay: '200ms' }}>
            Where Bacchus meets literature, and every glass tells a tale
          </p>
          <div className="opacity-0 animate-fade-slide-up" style={{ animationDelay: '400ms' }}>
            <Button onClick={scrollToTale}>
              Explore the Flock
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-parchment rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-parchment rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>
      
      <section id="our-tale" className="py-24 container mx-auto px-4">
        <h2 className="font-serif text-3xl text-center mb-4 opacity-0 animate-fade-slide-up">OUR TALE</h2>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="mb-4 opacity-0 animate-fade-slide-up" style={{ animationDelay: '200ms' }}>
            At Fables & Company, we believe every great wine or cocktail tells a story. Our venues are chapters in an anthology of taste, each with its own character yet bound by a common narrative of exceptional craft and literary inspiration.
          </p>
          <p className="opacity-0 animate-fade-slide-up" style={{ animationDelay: '400ms' }}>
            <span className="font-script text-xl text-sepia">Where feathered quills once wrote stories, we now pour them.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {venues.map((venue, index) => (
            <div 
              key={venue.slug}
              className="opacity-0 animate-fade-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <VenueCard
                name={venue.name}
                location={venue.location}
                slug={venue.slug}
              />
            </div>
          ))}
        </div>
      </section>
      
      <SeasonalCarousel />
      
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-4 opacity-0 animate-fade-slide-up">PigeonMail</h2>
          <p className="mb-6 opacity-0 animate-fade-slide-up" style={{ animationDelay: '200ms' }}>
            Subscribe to our newsletter for seasonal menus, event announcements, and literary musings delivered directly to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-slide-up" style={{ animationDelay: '400ms' }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow p-3 border border-sepia bg-parchment focus:outline-none focus:ring-1 focus:ring-sepia transition-all duration-300"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;