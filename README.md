# Full-Stack Blog Application

## Project Overview

This is a full-stack blog application built using **Next.js**, **MongoDB**, and **Tailwind CSS**. The application allows users to browse blog posts, filter by categories, and view individual blog details. It also includes an admin panel where content creators can manage blogs and subscriptions.

## Features

### User Features
- **Blog Post Filtering**: Users can filter blog posts by categories such as technology, startup, and lifestyle.
- **Blog Detail Page**: Each blog post has a dedicated page displaying its title, author, description, and social media links.
- **Email Subscription**: Users can subscribe to the blog to receive updates on new posts.

### Admin Features
- **Blog Management**: Admins can add, edit, and delete blog posts. Each post contains a title, description, category, author details, and an image.
- **Subscription Management**: Admins can view and delete email subscriptions from the database.

## Tech Stack

### Frontend
- **Next.js**: React framework used for building the blog frontend and handling server-side rendering.
- **Tailwind CSS**: Utility-first CSS framework for designing responsive and visually appealing UI.
- **Axios**: For making HTTP requests between the frontend and backend.

### Backend
- **Node.js**: JavaScript runtime used to handle server-side logic.
- **Express.js**: Web framework for building API endpoints and managing requests.
- **MongoDB**: NoSQL database used to store blog posts, author details, and subscriptions.

## How It Works

1. **Blog Listing and Filtering**: Users can browse a list of blog posts, filter them by category, and click on individual posts to view details.
   
2. **Dynamic Blog Pages**: Each blog post has its own unique URL, generated dynamically using **Next.js** dynamic routing, which fetches the relevant post data from MongoDB based on the post ID.

3. **Admin Panel**: Admins can log in to an admin panel to manage blog posts and subscriptions. They can upload images, manage post details, and remove outdated posts.

4. **Email Subscriptions**: Users can subscribe to the blog by entering their email. The subscription data is stored in MongoDB, and admins can view or delete subscriptions.

## Key Implementations

- **State Management**: State is managed using React hooks to filter blog posts dynamically and handle form submissions.
- **API Integration**: Backend APIs are integrated with the frontend using **Axios** for fetching and manipulating blog data and subscription entries.
- **Image Uploading**: Images are uploaded and stored using a structured naming convention, ensuring uniqueness.
- **Scalable Architecture**: The project follows a scalable structure, separating frontend and backend concerns while enabling easy expansion.

## Setup and Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/blog-nextjs-app.git
   cd blog-nextjs-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```
3. **Set up Environment Variables Create a .env file in the root directory and add:**

   ```bash
   MONGODB_URI=your_mongodb_connection_string
   ```
3. **Run the Application**

   ```bash
   npm run dev
   ```
