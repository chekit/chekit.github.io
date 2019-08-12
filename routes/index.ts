import homePageController from './../controllers';
import express from 'express';

const router = express.Router();

router.get('/', homePageController);

export default router;