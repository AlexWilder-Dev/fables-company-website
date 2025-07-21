import React from 'react';
import EventCard from '../components/EventCard';
import Button from '../components/Button';

const events = [
  {
    id: 1,
    title: "Wine & Verse Pairing",
    date: "May 15, 2025",
    time: "7:00 PM",
    venue: "Plume, Covent Garden",
    description: "A guided tasting experience where each wine is paired with a poem that captures its essence. Our sommelier and a local poet collaborate to create a multisensory journey."
  },
  {
    id: 2,
    title: "Tarot & Tipples",
    date: "May 21, 2025",
    time: "8:00 PM",
    venue: "Quill, Borough Yards",
    description: "An evening of fortune-telling and carefully crafted cocktails. Each card drawn inspires a unique drink mixed especially for you by our mystical mixologists."
  },
  {
    id: 3,
    title: "Jazz & Gin Chronicles",
    date: "June 3, 2025",
    time: "8:30 PM",
    venue: "Robin, Southbank Market",
    description: "Live jazz performances complement our special gin flight, featuring four distinct styles each telling their own story from around the world."
  },
  {
    id: 4,
    title: "Summer Solstice Celebration",
    date: "June 21, 2025",
    time: "6:00 PM",
    venue: "Finch, Brixton",
    description: "A midsummer night's gathering with seasonal wines, flower-infused cocktails, and a special menu inspired by Shakespeare's 'A Midsummer Night's Dream'."
  }
];

const EventsPage: React.FC = () => {
  return (
    <div>
      <section className="pt-32 pb-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-serif text-4xl mb-4">Events & Experiences</h1>
          <p className="text-lg">
            Where stories come to life through carefully crafted experiences. 
            Join us for tastings, pairings, and performances that engage all the senses.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {events.map(event => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              venue={event.venue}
              description={event.description}
            />
          ))}
        </div>
      </section>
      
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl mb-4">Private Events</h2>
            <p className="mb-6">
              Each of our venues offers private event options for intimate gatherings, corporate functions, or special celebrations. Our team will work with you to create a bespoke experience tailored to your needs.
            </p>
            <Button>Inquire About Private Events</Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-4">Propose an Event</h2>
          <p className="mb-6">
            Have an idea for a literary or wine-focused event? We're always open to creative collaborations.
          </p>
          <form className="max-w-lg mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="p-3 border border-sepia bg-parchment focus:outline-none focus:ring-1 focus:ring-sepia"
                required
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="p-3 border border-sepia bg-parchment focus:outline-none focus:ring-1 focus:ring-sepia"
                required
              />
            </div>
            <input 
              type="text" 
              placeholder="Event Title" 
              className="w-full p-3 border border-sepia bg-parchment focus:outline-none focus:ring-1 focus:ring-sepia"
              required
            />
            <textarea 
              placeholder="Tell us about your event idea..." 
              rows={5}
              className="w-full p-3 border border-sepia bg-parchment focus:outline-none focus:ring-1 focus:ring-sepia"
              required
            ></textarea>
            <Button type="submit" className="w-full">Submit Proposal</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;