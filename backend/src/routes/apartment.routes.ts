// src/routes/apartment.routes.ts
import express from 'express';
import { listApartments, getApartment, addApartment } from '../controllers/apartment.controller';

const router = express.Router();

// Define routes for apartment-related operations
router.get('/', listApartments);
router.get('/:id', getApartment);
router.post('/', addApartment);

export default router;
