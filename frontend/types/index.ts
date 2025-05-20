// Type definitions for the car rental system

export interface Voiture {
  id: number;
  marque: string;
  modele: string;
  immatriculation: string;
  prixParJour: number;
  reservations?: Reservation[];
}

export interface Client {
  id: number;
  nom: string;
  email: string;
  motDePasse: string;
  reservations?: Reservation[];
}

export interface Reservation {
  id: number;
  dateDebut: string; // ISO date string
  dateFin: string; // ISO date string
  client: Client;
  voiture: Voiture;
  paiement?: Paiement;
}

export interface Paiement {
  id: number;
  montant: number;
  datePaiement: string; // ISO date string
  moyenPaiement: string;
  reservation: Reservation;
}

export interface Profil {
  id: number;
  adresse: string;
  telephone: string;
  client: Client;
}

export interface Admin {
  id: number;
  nom: string;
  email: string;
  motDePasse: string;
}