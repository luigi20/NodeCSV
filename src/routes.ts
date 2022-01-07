import { Router } from 'express';
import multer from 'multer';
import { ReadFileCSVController } from './Controllers/ReadFileCSVController';

const multerConfig = multer();
const routes = Router();
const readFileCSVController = new ReadFileCSVController();

routes.post('/products', multerConfig.single("file"), readFileCSVController.handle);

export { routes };