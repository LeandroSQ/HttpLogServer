import DatabaseInjectable from "../database-injectable";
import { Schema } from "mongoose";

export default class PizzaFlavorDatabaseModel implements DatabaseInjectable {
    
    async onInject(mongoose: typeof import("mongoose")): Promise<{ name: string, schema: Schema<any> }> {
        return {
            name: "PizzaFlavor",
            schema: new Schema({
                name: String,
                ingredients: [String],
                extraPrice: { type: Number, default: 0.00 },
                type: {
                    type: String,
                    enum: ["Sweet", "Traditional", "Premium"]
                } 
            })
        };
    }

}