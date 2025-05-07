import { Request, Response } from 'express';
import Project from '../models/project';

export const listProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
