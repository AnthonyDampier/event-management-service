import { Schema, models, model } from 'mongoose';

export interface ICategory extends Document {
    _id: string;
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}

const CategorySchema = new Schema({
    name: { type: String, required: true, unique: true},
});

const Category = models.Category || model('Category', CategorySchema);

export default Category;