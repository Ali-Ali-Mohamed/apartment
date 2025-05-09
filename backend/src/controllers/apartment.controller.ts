import { Request, Response } from 'express';
import Apartment from '../models/apartment';
import { Op } from 'sequelize';
import ApartmentImage from '../models/apartmentimage';
import Project from '../models/project';


export const listApartments = async (req: Request, res: Response) => {
  // for search
  const searchQuery = req.query.searchQuery as string | undefined;

  // for pagination
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const offset = (page - 1) * limit;

  let whereClause = {};

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
    const { rows: apartments, count: total } = await Apartment.findAndCountAll({
      where: whereClause,
      limit,
      offset,
      distinct: true,
      include: [ApartmentImage, Project]
    });

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

export const getApartment = async (req: Request, res: Response) => {
  try {
    const apartment = await Apartment.findByPk(req.params.id, {
      include: [ApartmentImage, Project]
    });

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

export const addApartment = async (req: Request, res: Response) => {
  try {
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

    if (images && Array.isArray(images)) {
      const imageRecords = images.map((image: string) => ({
        image,
        apartmentId: newApartment.id
      }));
      await ApartmentImage.bulkCreate(imageRecords);
    }

    const apartmentWithImages = await Apartment.findByPk(newApartment.id, {
      include: [ApartmentImage]
    });

    res.status(201).json(apartmentWithImages);
  } catch (error) {
    console.error('Error creating apartment:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
