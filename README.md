# Prince Charles & Venissa — Wedding Invitation -- priven

A minimal, elegant, mobile-first wedding website built with React, Vite and Tailwind CSS.

This site serves as a digital communiqué and RSVP platform for the wedding of:

**Prince Charles Arko**  
&  
**Venissa Akyirefua Sam**

Saturday, 11 April 2026  
Victory Presbyterian Church, Adenta  
10:00 AM PROMPT

---

## Features

- Cinematic animated splash screen
- Smooth scroll reveal (both reveal and vanish on scroll direction)
- Elegant gold, cream and coffee-toned design
- Public RSVP form
- Instant on-screen confirmation (5 seconds)
- Responses collected automatically into Google Sheets
- Mobile-first layout
- Deployed on Vercel

---

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Google Apps Script (RSVP endpoint)
- Vercel (hosting)

---

## Installation

- Clone the repository:

git clone https://github.com/sampsonkpe/priven.git
cd priven

- Install dependencies:

npm install

- Run development server:

npm run dev

- Build for production:

npm run build

- Preview production build:

npm run preview

## Environment Variables
Create a .env file in the root directory:

VITE_GOOGLE_SCRIPT_URL=your_google_apps_script_exec_url

In Vercel, add the same variable under:

Project Settings → Environment Variables

## Project Structure
src/
  app/
    Home.tsx
  components/
    SplashScreen.tsx
    WeddingContent.tsx
    RSVPForm.tsx
    ScrollReveal.tsx
  main.tsx
  App.tsx

## Design Principles

- Minimal and refined
- Strong typographic hierarchy (Cinzel + Montserrat)
- Limited palette (Gold, Cream, Coffee Brown)
- Subtle motion — never excessive
- Breathable spacing and consistent dividers

## Licence

Private project. All rights reserved.