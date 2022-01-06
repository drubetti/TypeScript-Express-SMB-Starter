import { Router } from 'express';
import list from '../middlewares/list';
import listFs from '../middlewares/listFs';

const router = Router();

router.get('/list', list);
router.get('/list-fs', listFs);

export default router;
