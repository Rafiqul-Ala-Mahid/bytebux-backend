# Bytebux Backend

This project is the backend part of the Bytebux application.

## Frontend part of this project: [Bytebux-Task](https://github.com/Rafiqul-Ala-Mahid/bytebux-task)

## How to Run the Backend

Follow the steps below to set up and run the backend part of this project:

1. **Clone the Repository**

   Clone this project using the following command:
   ```bash
   git clone https://github.com/Rafiqul-Ala-Mahid/bytebux-backend.git
2. **Navigate to the Project Directory

   Change to the project directory:
   ```bash
   cd bytebux-backend
3. **Install Dependencies

   Install the required dependencies using npm:
   ```bash
   npm install
4. **Create a MongoDB URI

   Create a MongoDB URI and add your username and password to a .env file in the project root directory. Your .env file should look like this:
   ```bash
   DB_User=your_username
   DB_Password=your_password
   PORT=4000
5. **Run the Development Server

   Start the development server using nodemon:

   ```bash
   nodemon index.js

