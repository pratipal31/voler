import { useState } from "react";

interface StarRatingProps {
  rating: number;
  onRatingChange: (newRating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleClick = (newRating: number) => {
    onRatingChange(newRating);
  };

  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 cursor-pointer ${
            (hoverRating ?? rating) > index
              ? "text-yellow-500"
              : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
          onMouseEnter={() => setHoverRating(index + 1)}
          onMouseLeave={() => setHoverRating(null)}
          onClick={() => handleClick(index + 1)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .587l3.668 7.568 8.322 1.179-6.004 5.749 1.416 8.253L12 18.896l-7.402 3.885 1.416-8.253-6.004-5.749 8.322-1.179z" />
        </svg>
      ))}
      <button
        className="ml-2 text-gray-600"
        onClick={() => handleClick(rating + 1)}
      >
        ↑
      </button>
      <button
        className="ml-1 text-gray-600"
        onClick={() => handleClick(rating - 1)}
      >
        ↓
      </button>
    </div>
  );
};

export default StarRating;
