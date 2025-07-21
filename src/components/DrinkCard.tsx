import React from 'react';

interface DrinkCardProps {
  name: string;
  description: string;
  icon: 'wine' | 'cocktail';
}

const DrinkCard: React.FC<DrinkCardProps> = ({ name, description, icon }) => {
  return (
    <div className="border border-sepia p-6 flex flex-col items-center">
      <div className="mb-4">
        {icon === 'wine' ? (
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 55V35M10 15C10 8.33333 20 2 20 2C20 2 30 8.33333 30 15C30 25 20 35 20 35C20 35 10 25 10 15ZM10 55H30M15 60H25" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        ) : (
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15L32 8M8 15L5 40H35L32 8M8 15L32 8M20 40V50M12 50H28" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="29" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        )}
      </div>
      
      <h3 className="font-serif text-xl text-center mb-2">{name}</h3>
      <p className="text-center text-ink/80 italic">{description}</p>
    </div>
  );
};

export default DrinkCard;