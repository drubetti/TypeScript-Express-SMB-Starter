import { NextFunction, Request, Response } from 'express';
import sambaClient from '../../utils/sambaClient';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(await sambaClient.list('*'));
  } catch (e) {
    console.error(e);
    next(e);
  }
};
