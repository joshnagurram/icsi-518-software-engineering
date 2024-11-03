# E-commerce Product Page

## Description

This project enhances an e-commerce product page by integrating a backend using Express.js and MongoDB Atlas. It allows users to view products, add items to their cart and wishlist, and manage their product listings efficiently. The application is deployed on an AWS EC2 instance, ensuring high availability and scalability.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm).
- You have access to an AWS account and have set up an EC2 instance.
- You have a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and have created a database.
- You have installed [PM2](https://pm2.keymetrics.io/) for process management.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```
2. Navigate into the project directory: 

   ```bash
   cd icsi-518-software-engineering
   ```

3. Install the necessary dependencies for both the backend and frontend:

   * For the backend:

      ```bash
      cd backend
      npm install
      ```

   * For the fronted
      ```bash
      cd ../frontend
      npm install
      ```

4. Set up environment variables for MongoDB Atlas connection in the backend:

   Create a `.env` file in the backend directory with the following content:

   ```bash
   MONGODB_URI=<your-mongodb-atlas-connection-string>
   ```

## Usage

   #### Running the Application Locally

   1. Start the backend server:
      ```bash
      cd backend
      npm start
      ```
   2. In another terminal, start the frontend application:
      ```bash
      cd frontend
      npm start
      ```
   3. Open your web browser and navigate to http://localhost:3000 to see your application in action.

   ### Running the Application on AWS EC2

   1. SSH into your EC2 instance:
   ```bash
   ssh -i "your-key.pem" ec2-user@<your-ec2-ip-address>
   ```
   2. Navigate to the project directory on your EC2 instance.
   3. Install any necessary dependencies and start your server:
      * Start the backend using PM2:
      ```bash
      cd backend
      pm2 start index.js --name "ecommerce-backend"
      ```
      * Start the frontend server using a similar approach or use a reverse proxy (like Nginx) to serve the frontend build.
   4. Make sure your EC2 instance's security group allows inbound traffic on the required ports (e.g., 80 for HTTP).

## API Endpoints

* GET `/api/products` - Retrieve all products
* POST `/api/products` - Add a new product
* GET `/api/cart` - Retrieve cart items
* POST `/api/cart` - Add an item to the cart
* GET `/api/wishlist` - Retrieve wishlist items
* POST `/api/wishlist` - Add an item to the wishlist

## Deployment
The application is hosted on an AWS EC2 instance with the following address:
```bash
http://ec2-3-111-39-123.ap-south-1.compute.amazonaws.com:3000
```