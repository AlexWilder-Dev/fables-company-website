import React, { useState } from 'react';
import Button from './Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the newsletter signup here
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="w-full">
      {isSubmitted ? (
        <div className="p-4 border border-sepia text-center">
          <p className="text-sepia font-script text-xl mb-2">Thank you!</p>
          <p>Your pigeon is en route with future correspondence.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full p-3 border border-sepia bg-parchment focus:outline-none focus:ring-1 focus:ring-sepia"
            />
          </div>
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;