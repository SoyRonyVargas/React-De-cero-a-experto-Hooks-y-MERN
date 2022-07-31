import { User } from "../../auth/types/types";

export type Event = { 
    _id?: string
    title: string; 
    notes: string;
    start: Date; 
    end: Date;
    user: User | string 
};

export type EventNew = Omit<Event , "user">

