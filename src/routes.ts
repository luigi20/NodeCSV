import { Router } from 'express';
import multer from 'multer';
import { Request, Response } from 'express';

const multerConfig = multer({

});

const routes = Router();

routes.post('/products', multerConfig.single("file"), (req: Request, res: Response) => {
    console.log(req.file.buffer.toString("utf-8"));
    return res.send();
});


export { routes };