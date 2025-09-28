# FlavorFinds - A Manifest-Powered Food App

Welcome to FlavorFinds, a modern web application for discovering and sharing recipes. This project is built entirely with React for the frontend and powered by Manifest for a complete, auto-generated backend solution.

## Features

- **User Authentication**: Secure user signup and login.
- **Recipe Management**: Users can create, view, update, and delete their own recipes.
- **Image Uploads**: Easily upload photos for each recipe.
- **Community Driven**: View recipes shared by all users in the community.
- **Admin Panel**: A complete, built-in admin interface for managing users, recipes, and all other data.
- **Ownership & Permissions**: Secure policies ensure users can only edit their own content.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Manifest (SQLite/PostgreSQL, REST API, Auth, File Storage)
- **SDK**: `@mnfst/sdk` for seamless frontend-backend communication.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd flavorfinds
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   The application is pre-configured to connect to your Manifest backend.
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

### Default Credentials

- **Demo User**: `user@flavorfinds.com` / `password`
- **Admin Panel**: Access at `<your-backend-url>/admin`
- **Admin Login**: `admin@manifest.build` / `admin`
