import { Request, Response } from 'express';
import { ReadFileCSVServices } from '../services/ReadFileCSVServices';
class ReadFileCSVController {
    async handle(req: Request, res: Response) {
        const { file } = req;
        const { buffer } = file;
        const readFileCSVServices = new ReadFileCSVServices();
        const fileCSV = readFileCSVServices.execute(buffer);
        return res.json(fileCSV);
    }
}

export { ReadFileCSVController };