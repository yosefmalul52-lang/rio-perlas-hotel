export interface RoomOption {
  id: string;
  name: string;
  category: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  imageUrl: string;
  features: string[];
}

export interface ActivityOption {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  isPrivate: boolean;
  category: string;
}

export interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  dates: string;
  partySize: number;
  roomType: string;
  activities: string[];
  kashrutTier: string;
  specialRequests: string;
  totalEstimatedPrice: number;
  status: 'Pending' | 'Reviewing' | 'Confirmed';
  dateSubmitted: string;
}

export interface ChatMessage {
  sender: 'user' | 'concierge';
  text: string;
  timestamp: string;
}
