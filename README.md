HappyDelivery Kenya
Overview

HappyDelivery Kenya is a single-page food delivery web application built with React. The app allows users to browse available food items, place delivery orders, and view their pending orders. It uses a json-server as a mock backend for managing item and order data.

Features

Single Page Application built with Create React App

Displays a list of food items fetched from a REST API

Allows users to place new delivery orders using a controlled form

Displays a list of all orders made by the user

Supports deleting a pending order

Includes navigation with React Router for smooth page transitions

Styled using React Bootstrap and Bootswatch theme for an appealing UI

Technologies Used

React (Frontend)

React Router (Routing)

React Bootstrap / Bootswatch (Styling)

JSON Server (Mock backend)

JavaScript (ES6+)

HTML5 & CSS3

Project Structure
src/
├── components/
│   ├── Navbar.js
│   ├── Home.js
│   ├── ItemList.js
│   ├── ItemCard.js
│   ├── OrderForm.js
│   └── Orders.js
├── App.js
├── index.js
└── index.css
db.json

API Routes (json-server)

The backend is powered by json-server and provides the following RESTful routes:

GET /items - Fetch all available items

POST /orders - Add a new order

GET /orders - Fetch all orders

DELETE /orders/:id - Delete an order by ID

Running the Application

Start the JSON Server:

npx json-server --watch db.json --port 5000


Start the React App:

npm start


Open your browser and visit:

http://localhost:3000

Requirements Fulfilled

Single Page Application with Create React App

At least five React components

At least three client-side routes

Controlled form for POST requests

GET, POST, and DELETE requests using json-server

Dynamic state updates upon successful POST

Custom styling using a UI framework

Author

Developed by Happiness Ngeete<Github- Happiness-sudo>