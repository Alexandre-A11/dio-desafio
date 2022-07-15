import { prop, getModelForClass } from "@typegoose/typegoose";

class URL {
    @prop({ required: true })
    public hash: string;

    @prop({ required: true })
    originalURL: string;

    @prop({ required: true })
    urlshort: string;
}

export const URLModel = getModelForClass(URL);
