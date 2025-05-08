import express from 'express';
import cors from 'cors';
import apartmentRoutes from './routes/apartment.routes';
import projectRoutes from './routes/project.routes';

const app = express();

app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/api/v1/apartments', apartmentRoutes);
app.use('/api/v1/projects', projectRoutes);

export default app;
