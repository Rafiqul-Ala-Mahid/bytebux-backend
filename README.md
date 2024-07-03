# Bytebux Backend

This project is the backend part of the Bytebux application.

## Frontend part of this project: [Bytebux-Task](https://github.com/Rafiqul-Ala-Mahid/bytebux-task)

## Complete project video -> [Youtube](https://www.youtube.com/watch?v=oEGVtltJWh0)

## Short Overview about API Endpoints used in this project

### GET /tasks:

Retrieves a list of all tasks. This endpoint is used to fetch and display all tasks currently stored in the database.

### GET /tasks/:id:

Retrieves a specific task by its unique ID. Allows fetching details of a particular task identified by its ID. Useful for displaying task details or editing specific tasks.

### POST /tasks:

Creates a new task. Used when adding a new task to the database. The request body typically contains details such as title, description, and completion status of the new task.

### PUT /tasks/:id:

Updates an existing task identified by its ID. Enables modifying existing task details. The request body includes updated information for the specified task ID, such as changes to the title, description, or completion status.

### DELETE /tasks/:id:

Deletes a task by its ID. Removes a specific task from the database based on its unique ID. This endpoint is used when a user wants to delete a task permanently.

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

