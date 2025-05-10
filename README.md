# Running the Project with Docker
Make sure you have Docker and Docker Compose installed on your system.

## Clone the Repository
`git clone https://github.com/Ali-Ali-Mohamed/apartment.git`  
`cd apartment`

## Build and Start the Containers
Run the following commands to build the images and start the services:

`docker-compose build`  
`docker-compose up`

### This will:
Start a MySQL database on port 3308.  
Launch the backend server on port 3000, connecting automatically to the database.  
Start the frontend (Next.js) app on port 3001.  

## Access the Apps
Frontend: http://localhost:3001  
Backend API: http://localhost:3000/api/v1  

## Stop the Containers
To stop the running containers:  
`docker-compose down`
