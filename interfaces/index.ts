// TypeScript interfaces for ALX Listing App

/**
 * Props interface for the reusable Card component
 * Used for displaying property information across the application
 */
export interface CardProps {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  price?: number;
  rating?: number;
  location?: string;
  amenities?: string[];
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Props interface for the reusable Button component
 * Used for actions like "Book Now", "Details", etc.
 */
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

/**
 * Interface for property listing data
 * Represents a single property/listing in the application
 */
export interface PropertyListing {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  amenities: string[];
  hostInfo: {
    name: string;
    avatar: string;
    isVerified: boolean;
  };
  availability: {
    checkIn: string;
    checkOut: string;
    minNights: number;
  };
  propertyType: string;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
}

/**
 * Interface for user data
 */
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isVerified: boolean;
}

/**
 * Interface for booking data
 */
export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
}

/**
 * API Response wrapper interface
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
