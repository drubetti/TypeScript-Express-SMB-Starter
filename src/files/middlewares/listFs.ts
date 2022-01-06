import fs from 'fs';
import { NextFunction, Request, Response } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(fs.readdirSync('/mnt/smbstorage'));
  } catch (e) {
    console.error(e);
    next(e);
  }
};
