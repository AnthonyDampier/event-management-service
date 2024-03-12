import { Document, Schema, model, models } from 'mongoose';

export interface IEvent extends Document {
    _id: string;
    title: string;
    description: string;
    date: Date;
    location?: string;
    imageURL: string;
    created_at: Date;
    updated_at: Date;
    startDateTime: Date;
    endDateTime: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    category: { _id: string, name: string};
    organizer: { _id: string, firstName: string, lastName: string};
}

const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String},
    date: { type: Date, required: true },
    location: { type: String,},
    imageURL: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    startDateTime: { type: Date, default: Date.now },
    endDateTime: { type: Date, default: Date.now },
    price: { type: String,},
    isFree: { type: Boolean, required: false },
    url: { type: String, required: false },
    category: { type: Schema.Types.ObjectId, ref: 'Category'},
    organizer: { type: Schema.Types.ObjectId, ref: 'User'},
});

const Event = models.Event || model('Event', EventSchema);

export default Event;