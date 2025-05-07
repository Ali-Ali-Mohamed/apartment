import express from 'express';
import apartmentRoutes from './routes/apartment.routes';
import projectRoutes from './routes/project.routes';


const app = express();

app.use(express.json());
app.use('/api/v1/apartments', apartmentRoutes);
app.use('/api/v1/projects', projectRoutes);

export default app;
