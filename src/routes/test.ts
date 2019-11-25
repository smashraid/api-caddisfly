import { Request, Response, NextFunction, Router } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('This is a test');
});

export default router;
