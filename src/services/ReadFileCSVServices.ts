import { Readable } from 'stream';
import readline from 'readline';
import { client } from '../database/client';
interface Products {
    codeBar: string;
    description: string;
    price: number;
    quantity: number;
}
class ReadFileCSVServices {

    async execute(buffer: Buffer) {
        const readableFile = new Readable();
        readableFile.push(buffer);
        readableFile.push(null);
        const productsLine = readline.createInterface({
            input: readableFile
        });
        const products: Products[] = [];
        for await (let lin of productsLine) {
            const productsLineSplit = lin.split(';');
            products.push({
                codeBar: productsLineSplit[0],
                description: productsLineSplit[1],
                price: Number(productsLineSplit[2]),
                quantity: Number(productsLineSplit[3])
            })
        }

        for await (let { codeBar, description, price, quantity } of products) {
            await client.products.create({
                data: {
                    codeBar,
                    description,
                    price,
                    quantity
                }
            })
        }
    }
}

export { ReadFileCSVServices };