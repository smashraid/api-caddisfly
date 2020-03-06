import { Request, Response, NextFunction, Router } from 'express';

import { Category } from '../models/category';
import logger from '../utils/logger';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    let categories = await Category.findAll();
    res.json(categories);
});

router.get('/:id', (req: Request, res: Response) => {
});

router.post('/', async (req: Request, res: Response) => {
    const { CategoryName, Description, Picture } = req.body;
    const category = await Category.create({
        CategoryName,
        Description,
        Picture
    });
    res.status(201).json({
        error: false,
        data: category,
        message: "New todo has been created."
    });
});

router.put('/', (req: Request, res: Response) => {

});

router.patch('/:id', (req: Request, res: Response) => {

});

router.delete('/:id', (req: Request, res: Response) => {

});

export default router;
