import { Request, Response, NextFunction, Router } from 'express';
import { verbose, Database, OPEN_READONLY } from 'sqlite3';


import { Category } from '../models/category';
import { Product } from '../models/product';
import logger from '../utils/logger';

const router: Router = Router();
const sqlite3 = verbose();

const db: Database = new sqlite3.Database('../db.db', OPEN_READONLY, (err) => {
    if (err) {
        console.error(err.message);
    }
    logger.debug('Connected to the database.');
});

router.get('/', (req: Request, res: Response) => {
    // db.serialize(() => {
    //     db.each(`SELECT CategoryID
    //                     ,CategoryName
    //              FROM Category`, (err, row) => {
    //       if (err) {
    //         console.error(err.message);
    //       }
    //       console.log(row.CategoryID + "\t" + row.CategoryName);
    //     });
    //   });

    //   db.close((err) => {
    //     if (err) {
    //       console.error(err.message);
    //     }
    //     console.log('Close the database connection.');
    //   });
    Category.findAll().then(categories => {
        logger.info('Hello World!');
        res.send(categories);
    });
});

router.get('/product', (req: Request, res: Response) => {
    // Product.findAll({
    //     include: [Product.associations.categories]        
    // }).then(products => {        
    //     res.send(products);
    //   });   
    Product.findByPk(1, {
        include: [
             {
                model: Category
            }
     ]
    }).then(product => {
        res.send(product);
    });
});

export default router;
