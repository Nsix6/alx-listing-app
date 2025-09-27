import React from 'react';
import { CardProps } from '../../interfaces';

/**
 * Reusable Card component for displaying property information
 * Used across the application for consistent property presentation
 */
const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  image,
  price,
  rating,
  location,
  amenities,
  onClick,
  className = '',
  children,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:scale-105 cursor-pointer ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : undefined}
      aria-label={title ? `Property: ${title}` : 'Property card'}
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title || 'Property image'}
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
            loading="lazy"
          />
          {rating && (
            <div className="absolute top-2 right-2 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
              <svg
                className="w-4 h-4 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">{rating}</span>
            </div>
          )}
        </div>
      )}

      <div className="p-4">
        <div className="mb-2">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 mb-1">
              {title}
            </h3>
          )}
          {location && (
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {location}
            </p>
          )}
        </div>

        {description && (
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {description}
          </p>
        )}

        {amenities && amenities.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {amenities.slice(0, 3).map((amenity, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {amenity}
                </span>
              ))}
              {amenities.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  +{amenities.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {price !== undefined && (
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-gray-900">${price}</span>
              <span className="text-gray-600 text-sm ml-1">per night</span>
            </div>
          </div>
        )}

        {children && <div className="mt-3">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
