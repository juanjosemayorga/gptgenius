# TourGPT

**TourGPT** is an AI-powered travel assistant built with **Next.js**, **TypeScript**, and the **OpenAI API**. It helps users generate personalized travel tours for any city worldwide, providing insights and recommendations with the power of artificial intelligence. The application features four main sections:

## Features

- **Chat:**
  Interact with a chatbot that can answer any question about cities across the globe, using AI to provide real-time travel advice.
- **New Tour:**
  Simply enter the name of the city you want to visit, and TourGPT will generate a custom tour plan for you, powered by AI.

- **Tours:**
  This section displays all the tours you’ve created, allowing you to revisit them whenever needed.

- **Profile:**
  Manage your personal details, handled securely with **Clerk**, and check your remaining token balance to use the app.

---

### Images

![image](https://github.com/user-attachments/assets/a32eeb49-2a27-4f37-8ec0-aed45d60e9c4)
![image](https://github.com/user-attachments/assets/b42c1a90-4ad6-42ba-92bc-0fdb79585ba1)
![image](https://github.com/user-attachments/assets/d9d1b9de-e32c-4bf3-8d21-9940e7d6fd5b)
![image](https://github.com/user-attachments/assets/1780e0d6-3f8b-49a9-aa31-2bbb764781a1)

### Tech Stack

- **Next.js** for server-side rendering and web app structure
- **TypeScript** for strong typing and scalability
- **OpenAI API** for AI-driven recommendations and chat
- **Clerk** for user authentication and profile management

---

## Installation (Development Mode)

Follow these steps to set up **TourGPT** for local development:

### Prerequisites

- Node.js (v14 or higher)
- Docker
- Prisma
- Clerk account

### Steps

1. **Install dependencies**
   Run the following command to install all project dependencies:

   ```bash
   npm install
   ```

2. **Set up environment variables**
   Create an `.env` file by copying `.env.sample`:

   ```bash
   cp .env.sample .env
   ```

   Then, fill in the environment variables:

   - **Clerk API Keys**: You need to create a Clerk account and generate the required API keys.
   - **OpenAI API Key**: Obtain your OpenAI API key and add it to the `.env` file.
   - **Database Configuration**: Add your database connection details.

3. **Start Docker**
   Bring up the Docker container by running:

   ```bash
   docker-compose up -d
   ```

4. **Generate Prisma Client**
   After Docker is up, generate the Prisma client:

   ```bash
   npx prisma generate
   ```

5. **Run Prisma Migrations**
   Apply the Prisma migrations to the database:

   ```bash
   npx prisma migrate dev
   ```

6. **Open Prisma Studio**
   To visualize and manage your database, start Prisma Studio:

   ```bash
   npx prisma studio
   ```

7. **Run the development server**
   Finally, start the application in development mode:

   ```bash
   npm run dev
   ```

---

Now you should be able to access **TourGPT** in your local environment.
