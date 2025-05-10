import express from 'express';
import cors from 'cors'; // CORS to handle Cross-Origin Resource Sharing (CORS) requests
import apartmentRoutes from './routes/apartment.routes';
import projectRoutes from './routes/project.routes';

// Creating an Express app
const app = express();

// Configuring CORS middleware
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// APIs V1 routes
app.use('/api/v1/apartments', apartmentRoutes);
app.use('/api/v1/projects', projectRoutes);

export default app;
