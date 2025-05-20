# Car Rental System - Frontend

This is the frontend application for a car rental system built with Next.js. It integrates with a Spring Boot backend API for managing cars, clients, reservations, and payments.

## Getting Started

### Prerequisites

- Node.js (version 18.x or later)
- npm or yarn
- Java 17 or later (for running the backend)
- Spring Boot backend application running

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with the following content:

```
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

Replace the URL with your Spring Boot backend API URL if needed.

### Running the Application

#### Development Mode

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Production Build

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Features

- Car listing and details
- Car reservation system
- Admin dashboard for managing cars, clients, and reservations
- User registration and authentication
- Responsive design for all devices

## Project Structure

- `/app` - Next.js application routes and pages
- `/components` - React components
- `/types` - TypeScript type definitions
- `/lib` - Utility functions and helpers
- `/app/api` - API client for backend integration

## Backend Integration

This application is designed to work with a Spring Boot backend. The following API endpoints are used:

- `GET /api/voitures` - Get all cars
- `GET /api/voitures/{id}` - Get car by ID
- `POST /api/voitures` - Create a new car
- `PUT /api/voitures/{id}` - Update a car
- `DELETE /api/voitures/{id}` - Delete a car

Additional endpoints for clients, reservations, and payments will be integrated as they become available in the backend.

## Configuration

You can modify the following files for customization:

- `app/layout.tsx` - Main application layout
- `tailwind.config.ts` - Tailwind CSS configuration
- `app/nextconfig.js` - Next.js configuration