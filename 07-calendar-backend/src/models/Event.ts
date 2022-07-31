import { Event } from './../events/types/index';
import { Schema, model } from 'mongoose';

const EventSchema = new Schema<Event>({
    title: { 
        type: String, 
        required: true 
    },
    notes: {
        type: String,
        required: true,
    },
    start : {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

EventSchema.method('toJSON',function(){
    
    const { __v , ...object } = this.toObject()

    return object

})

const EventModel = model<Event>('Event', EventSchema);

export default EventModel