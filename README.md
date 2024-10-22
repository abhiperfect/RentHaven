Deploy link-
## Overview

This project is a full-stack web application developed  using the MERN stack (MongoDB, Express.js, React.js, Node.js). It aims to replicate the core functionality , allowing users to search for accommodations, view details, make bookings, and manage their listings.

## Getting Started

1. **Clone the Repository:**

   ```bash
   my github link
https://github.com/abhiperfect/RentHaven

2. **Install dependencies:**

   Navigate to client directory and install frontend dependencies using yarn

   ```
   yarn install
   ```

   Similary navigate to api folder and install backend dependencies

   ```
   yarn install
   ```

3. **ENV variables:**

   - create .env file in the client folder and add these variables

     #### VITE_BASE_URL= http://localhost:4000

     #### VITE_GOOGLE_CLIENT_ID= your google client id

   - create .env file in the api folder and add these variables

     #### PORT= 4000

     #### DB_URL= your db url

     #### JWT_SECRET= your secret (string)

     #### JWT_EXPIRY= 20d

     #### COOKIE_TIME= 7

     #### SESSION_SECRET= your secret session (string)

     #### CLOUDINARY_NAME= your secret session

     #### CLOUDINARY_API_KEY= your cloudinary key

     #### CLOUDINARY_API_SECRET= your cloudinary api secret

     #### CLIENT_URL= http://localhost:5173

4. **Run project:**
   - Open terminal, navigate to client directory and run below command to start frontend
   ```
       yarn run dev
   ```
   - Open another terminal, navigate to api directory and run this command to start backend server
   ```
       yarn start
   ```

## Features

- **User Authentication:** Users can sign up, log in, and log out securely. Passwords are hashed for security.
- **Google Login:** Users can sign up and log in using their gmail.

  ![](client/public/assets/auth.png)

- **Search Listings:** Users can search for accommodations.

  ![](client/public/assets/search.png)

- **View Listings:** Users can view detailed information about each accommodation, including photos, descriptions, amenities.

  ![](client/public/assets/view.png)

- **Make Bookings:** Authenticated users can book accommodations for specific dates.

  ![](client/public/assets/book.png)

- **Manage Listings:** Hosts can create, edit, and delete their listings.

  ![](client/public/assets/manage.png)

- **Responsive Design:** The application is designed to be responsive and work seamlessly across different devices.

 
##Property Recommendation System


property recommendation system that suggests properties to users based on their browsing and search history. The system is built with a Flask server for the recommendation model and an Express server for the frontend interaction.

##Model Overview


The recommendation system uses a content-based filtering approach. It analyzes the user's past interactions (browsing history, searches) with properties and provides personalized property suggestions.

1. Data Collection
Two main datasets are used:
Property Dataset: This dataset contains over 100 property records with attributes such as property ID, location, price, type, and size.

User Search History Dataset: A dataset with over 100 users  each having records of the properties they have viewed or searched for in the past

##Recommendation Model

The model utilizes content-based filtering The properties are represented by their features such as location, price, and type. When a user views or searches for a property the model tries to recommend properties with similar attributes.
Based on a user's previous interactions with properties (e.g., similar location, price range, or type) the model calculates similarity scores and suggests relevant properties

## Machine Learning Approach

 Cosine similarity is applied to find the most similar properties based on user preferences.
Dummy data was generated to simulate browsing history and property datasets to fine-tune the model.


  

## Technologies Used

- **MongoDB:** NoSQL database for storing user data, listings.
- **Express.js:** Web application framework for building the backend server.
- **React.js:** JavaScript library for building the user interface.
- **Node.js:** JavaScript runtime environment for executing server-side code.
- **Tailwind CSS:** A utility-first CSS framework
- **JWT:** JSON Web Tokens for secure user authentication.
