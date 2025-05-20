# 🚗 Car Rental System

A full-stack car rental management application built with:

- **Backend:** Spring Boot + Spring Data JPA + MySQL
- **Frontend:** Next.js (React) + TypeScript + Tailwind CSS + shadcn/ui
- **Features:** Client registration & login, car listing & management, reservation handling

---

## 📦 Features

### ✅ Frontend (Next.js)
- 🔐 Client registration and login
- 🚗 Car listing with search, sorting, and deletion
- 📝 Car reservation interface
- 🌐 Multi-language support (optional)
- 🍞 Toast notifications
- ⚙️ Responsive and modern UI using shadcn/ui

### 🔧 Backend (Spring Boot)
- 🔐 API for client registration & authentication
- 🚗 CRUD API for car (voiture) management
- 📅 Reservation API
- 🗃️ MySQL database 
- 📦 RESTful architecture

---

## 📁 Project Structure

car-rental-system/
├── backend/ (Spring Boot)
│ ├── src/main/java/com/voiture/system/
│ │ ├── controller/ # REST Controllers (Client, Voiture, Reservation)
│ │ ├── model/ # Entities: Client, Voiture, Reservation
│ │ ├── repository/ # Spring Data JPA Repositories
│ │ ├── service/ # Business logic services
│ │ └── VoitureLocationApplication.java
│ └── resources/
│ └── application.properties
├── frontend/ (Next.js)
│ ├── app/
│ │ └── dashboard/voitures/ # Voiture pages (list, add, edit)
│ ├── components/ # UI components
│ ├── lib/ # Utilities (e.g., formatters)
│ └── api/backendApi.ts # API call abstraction to backend
└── README.md



---

## 🚀 Getting Started

### 🧰 Prerequisites

- Java 17+
- Node.js 18+
- Yarn or npm
- MySql 

---

### 🔧 Backend Setup (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run

💻 Frontend Setup (Next.js)
cd frontend
npm install
npm run dev


