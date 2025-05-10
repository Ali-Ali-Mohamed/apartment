// src/routes/apartment.routes.ts
import express from 'express';
import { listProjects } from '../controllers/project.controller';

const router = express.Router();

// Define routes for project-related operations
router.get('/', listProjects);

export default router;
