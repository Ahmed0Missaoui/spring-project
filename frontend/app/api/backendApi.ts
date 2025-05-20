// API functions for Client (User)
export const clientApi = {
  register: async (client: { nom: string; email: string; motDePasse: string }) => {
    const response = await fetch(`${API_BASE_URL}/clients/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client),
    });
    return handleResponse(response);
  },
  login: async (email: string, motDePasse: string) => {
    const response = await fetch(`${API_BASE_URL}/clients/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, motDePasse }),
    });
    return handleResponse(response);
  },
};
import { Voiture, Client, Reservation, Paiement, Profil, Admin } from '@/types';

// Define the base URL for API requests
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

// Helper function for handling API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'An error occurred');
  }
  return response.json();
};

// API functions for Voiture (Car)
export const voitureApi = {
  getAll: async (): Promise<Voiture[]> => {
    const response = await fetch(`${API_BASE_URL}/voitures`);
    return handleResponse(response);
  },
  
  getById: async (id: number): Promise<Voiture> => {
    const response = await fetch(`${API_BASE_URL}/voitures/${id}`);
    return handleResponse(response);
  },
  
  create: async (voiture: Omit<Voiture, 'id'>): Promise<Voiture> => {
    const response = await fetch(`${API_BASE_URL}/voitures`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(voiture),
    });
    return handleResponse(response);
  },
  
  update: async (id: number, voiture: Partial<Voiture>): Promise<Voiture> => {
    const response = await fetch(`${API_BASE_URL}/voitures/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(voiture),
    });
    return handleResponse(response);
  },
  
  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/voitures/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || 'Failed to delete car');
    }
  },
};

// Add additional API functions for other entities as needed
// These would be implemented once the corresponding backend endpoints are available


// API functions for Reservation
export const reservationApi = {
  getAll: async (): Promise<Reservation[]> => {
    const response = await fetch(`${API_BASE_URL}/reservations`)
    return handleResponse(response)
  },
  getById: async (id: number): Promise<Reservation> => {
    const response = await fetch(`${API_BASE_URL}/reservations/${id}`)
    return handleResponse(response)
  },
  create: async (reservation: Omit<Reservation, 'id'>): Promise<Reservation> => {
    const response = await fetch(`${API_BASE_URL}/reservations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservation),
    })
    return handleResponse(response)
  },
  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/reservations/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      const error = await response.text()
      throw new Error(error || 'Failed to delete reservation')
    }
  },
}

// (Already declared above, remove this duplicate)

export const paiementApi = {
  // Placeholder for payment API calls
  // These would be implemented once the corresponding backend endpoints are available
};