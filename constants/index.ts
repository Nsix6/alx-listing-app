// Constants for ALX Listing App

/**
 * API Configuration
 */
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  ENDPOINTS: {
    PROPERTIES: '/properties',
    USERS: '/users',
    BOOKINGS: '/bookings',
    REVIEWS: '/reviews',
    AUTH: '/auth',
  },
  TIMEOUT: 10000,
} as const;

/**
 * UI Text Constants
 */
export const UI_TEXT = {
  BUTTONS: {
    BOOK_NOW: 'Book Now',
    VIEW_DETAILS: 'View Details',
    LOAD_MORE: 'Load More',
    CANCEL: 'Cancel',
    CONFIRM: 'Confirm',
    SAVE: 'Save',
    EDIT: 'Edit',
    DELETE: 'Delete',
    LOGIN: 'Log In',
    SIGNUP: 'Sign Up',
    LOGOUT: 'Log Out',
  },
  MESSAGES: {
    LOADING: 'Loading...',
    NO_RESULTS: 'No properties found',
    ERROR: 'Something went wrong. Please try again.',
    SUCCESS: 'Operation completed successfully',
    BOOKING_CONFIRMED: 'Your booking has been confirmed!',
    LOGIN_REQUIRED: 'Please log in to continue',
  },
  LABELS: {
    PRICE_PER_NIGHT: 'per night',
    GUESTS: 'guests',
    BEDROOMS: 'bedrooms',
    BATHROOMS: 'bathrooms',
    RATING: 'Rating',
    REVIEWS: 'reviews',
    AMENITIES: 'Amenities',
    LOCATION: 'Location',
    CHECK_IN: 'Check-in',
    CHECK_OUT: 'Check-out',
  },
} as const;

/**
 * Application Configuration
 */
export const APP_CONFIG = {
  NAME: 'ALX Listing App',
  DESCRIPTION: 'Find and book amazing places to stay',
  VERSION: '1.0.0',
  AUTHOR: 'ALX Student',
  CONTACT_EMAIL: 'support@alx-listing.com',
} as const;

/**
 * Layout and Design Constants
 */
export const LAYOUT = {
  MAX_WIDTH: '1280px',
  BREAKPOINTS: {
    SM: '640px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px',
    '2XL': '1536px',
  },
  SPACING: {
    XS: '4px',
    SM: '8px',
    MD: '16px',
    LG: '24px',
    XL: '32px',
    '2XL': '48px',
  },
} as const;

/**
 * Property Types
 */
export const PROPERTY_TYPES = [
  'Apartment',
  'House',
  'Villa',
  'Condo',
  'Townhouse',
  'Studio',
  'Loft',
  'Cabin',
  'Cottage',
  'Mansion',
] as const;

/**
 * Common Amenities
 */
export const AMENITIES = [
  'WiFi',
  'Kitchen',
  'Washing Machine',
  'Air Conditioning',
  'Heating',
  'TV',
  'Parking',
  'Pool',
  'Gym',
  'Pet Friendly',
  'Balcony',
  'Garden',
  'Fireplace',
  'Hot Tub',
  'Beach Access',
] as const;

/**
 * Booking Status Options
 */
export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
} as const;

/**
 * Currency Options
 */
export const CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' },
] as const;

/**
 * Date Format Patterns
 */
export const DATE_FORMATS = {
  SHORT: 'MMM dd',
  MEDIUM: 'MMM dd, yyyy',
  LONG: 'MMMM dd, yyyy',
  ISO: 'yyyy-MM-dd',
} as const;

/**
 * Image Configuration
 */
export const IMAGE_CONFIG = {
  PLACEHOLDER: '/assets/images/placeholder.jpg',
  QUALITY: 85,
  FORMATS: ['webp', 'jpg', 'png'],
  SIZES: {
    THUMBNAIL: '150x150',
    SMALL: '300x200',
    MEDIUM: '600x400',
    LARGE: '1200x800',
  },
} as const;

/**
 * Social Media Links
 */
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/alxlisting',
  TWITTER: 'https://twitter.com/alxlisting',
  INSTAGRAM: 'https://instagram.com/alxlisting',
  LINKEDIN: 'https://linkedin.com/company/alxlisting',
} as const;
