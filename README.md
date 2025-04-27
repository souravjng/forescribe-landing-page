This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:
Forescribe Landing Page
A modern, responsive landing page built with Next.js, Tailwind CSS, and TypeScript.
The project includes reusable components like a Logo, LoginCard, Card, a long card setup, and a functional Contact Us page using React Hooks.

📦 Features
✅ Responsive design for all devices
✅ Built with Next.js 14, Tailwind CSS, TypeScript
✅ Components: Logo, LoginCard, Card
✅ Functional Contact Us page with form handling via React Hooks
✅ Image assets and data dynamically imported from /assets folder
✅ Smooth animations using framer-motion
✅ Organized and scalable code structure

🚀 Installation & Running the Project
Clone the Repository

bash
Copy
Edit
git clone https://github.com/your-username/forescribe-landing-page.git
Navigate to the project directory

bash
Copy
Edit
cd forescribe-landing-page
Install the dependencies

bash
Copy
Edit
npm install
# or
yarn install
Run the development server

bash
Copy
Edit
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser to see the project live.

📋 Assumptions Made During Development
The provided images and data (such as card content) are stored inside the /public/assets directory.

The data.js file inside the /public/assets/ folder exports an array of card data for the cards display.

The authentication buttons in the LoginCard (Google, Microsoft) are for design purposes only and are not connected to real OAuth services.

Form submission on the Contact Us page only logs the data to the console — no backend integration yet.

✨ Additional Features & Improvements
Added animation effects to Cards and Buttons using Framer Motion.

Contact form uses React Hooks (useState and useEffect) for handling form data and live logging.

Design was optimized to be pixel-perfect with custom Tailwind utility classes.

Reusable and modular components to promote scalability for future pages.

Hover effects and transition animations for an interactive experience.

📂 Project Structure
pgsql
Copy
Edit
forescribe-landing-page/
├── components/
│   ├── Card.tsx
│   ├── LoginCard.tsx
│   ├── Logo.tsx
├── pages/
│   ├── index.tsx (Home Page)
│   ├── contact.tsx (Contact Us Page)
├── public/
│   ├── assets/
│       ├── 39705.png
│       ├── logo.svg
│       ├── data.js
├── styles/
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
🔗 Technologies Used
Next.js

Tailwind CSS

TypeScript3

Framer Motion

React Icons

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
