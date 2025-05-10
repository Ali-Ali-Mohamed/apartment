import { Request, Response } from 'express';
import Apartment from '../models/apartment';
import { Op } from 'sequelize';
import ApartmentImage from '../models/apartmentimage';
import Project from '../models/project';

// List apartments with pagination and search
export const listApartments = async (req: Request, res: Response) => {
  // for search
  const searchQuery = req.query.searchQuery as string | undefined;

  // for pagination
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 6;
  const offset = (page - 1) * limit;

  let whereClause = {};

  // if searchQuery is provided, add it to the where clause
  if (searchQuery) {
    whereClause = {
      [Op.or]: [
        {
          title: {
            [Op.like]: `%${searchQuery}%`
          }
        },
        {
          id: {
            [Op.like]: `%${searchQuery}%`
          }
        }
      ]
    };
  }

  try {
    // Fetch apartments with pagination and search
    const { rows: apartments, count: total } = await Apartment.findAndCountAll({
      where: whereClause,
      limit,
      offset,
      distinct: true,
      include: [ApartmentImage, Project]
    });

    // response with pagination info
    res.json({
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      data: apartments
    });
  } catch (error) {
    console.error('Error fetching apartments:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get apartment by ID
export const getApartment = async (req: Request, res: Response) => {
  try {
    // Fetch apartment by ID
    const apartment = await Apartment.findByPk(req.params.id, {
      include: [ApartmentImage, Project]
    });

    // Check if apartment exists
    if (apartment) {
      res.json(apartment);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {
    console.error('Error fetching apartment:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Add apartment
export const addApartment = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const {
      title,
      description,
      price,
      bedrooms,
      bathrooms,
      square_feet,
      has_parking,
      has_elevator,
      has_balcony,
      address,
      lat,
      lng,
      projectId,
      images
    } = req.body;

    // Check if all required fields are present and create apartment
    const newApartment = await Apartment.create({
      title,
      description,
      price,
      bedrooms,
      bathrooms,
      square_feet,
      has_parking,
      has_elevator,
      has_balcony,
      address,
      lat,
      lng,
      projectId
    });

    // Check if images are provided and create apartment images
    if (images && Array.isArray(images)) {
      const imageRecords = images.map((image: string) => ({
        image,
        apartmentId: newApartment.id
      }));
      await ApartmentImage.bulkCreate(imageRecords);
    }

    // Fetch the newly created apartment with images
    const apartmentWithImages = await Apartment.findByPk(newApartment.id, {
      include: [ApartmentImage]
    });

    res.status(201).json(apartmentWithImages);
  } catch (error) {
    console.error('Error creating apartment:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
