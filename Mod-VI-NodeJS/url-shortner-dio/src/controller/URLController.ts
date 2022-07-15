import { Request, Response } from "express";
import shortId from "shortid";
import { config } from "../config/Constant";
import { URLModel } from "../database/model/URL";

export class URLController {
    public async shortenURL(req: Request, res: Response): Promise<void> {
        // -TODO: URL existe?
        const { originalURL } = req.body;
        const url = await URLModel.findOne({ originalURL });
        if (url) {
            res.json(url);
            return;
        }

        // -TODO: Hash URL
        const hash = shortId.generate();
        const urlshort = `${config.API_URL}/${hash}`;
        // TODO: Salvar URL no DB
        const newUrl = await URLModel.create({ hash, originalURL, urlshort });

        // TODO: Retornar URL
        res.json({ newUrl });
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        // TODO: Pegar Hash da URL
        const { hash } = req.params;
        // TODO: Buscar URL no DB
        const url = await URLModel.findOne({ hash });

        // TODO: Redirecionar para URL Original
        if (url) {
            res.redirect(url.originalURL);
            return;
        }
        res.status(404).json({ error: "URL not found" });
    }
}
