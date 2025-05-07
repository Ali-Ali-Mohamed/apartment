// src/routes/apartment.routes.ts
import express from 'express';
import { listProjects } from '../controllers/project.controller';

const router = express.Router();

router.get('/', listProjects);

export default router;
