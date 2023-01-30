import express, { Request, Response } from 'express';
import loadDB from '../db';

const router = express.Router();

// Query example for "users" collection
router.get('/users', async (req: Request, res: Response, next) => {
  try {
    const db = await loadDB();

    db
      .collection('users')
      .find({})
      .toArray((err: any, result) => {
        if (err) {
          res.status(400).send("Error fetching listings!");
        } else {
          res.json(result);
        }
      });

  } catch (error) {
    res.status(504).send("Database timeout");
  }
});

export { router as routerUsers };
