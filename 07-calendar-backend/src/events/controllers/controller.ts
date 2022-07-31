import { TypedRequest , JWTAuthPayload } from './../../types'
import { Event , EventNew } from '../types'
import EventModel from '../../models/Event'

export const GetAllEvents : TypedRequest<Event[] ,string | JWTAuthPayload> = async ( req , res ) => {

    const user_id = req.payload 

    const AllEvents = await EventModel.find({ user: user_id.id })
        .populate("user" , "name")

    res.json({
        data: AllEvents,
        ok: true
    })

}

export const CreateEvent : TypedRequest<Event | null, EventNew , JWTAuthPayload> = async ( req , res ) => {

    try
    {

        const NewEvent = new EventModel(req.body)

        if( !req.payload )
        {
            return res.status(400)
        }

        NewEvent.user = req.payload.id!

        const EventCreated = await NewEvent.save()

        console.log(EventCreated)

        res.status(201).json({
            ok: true,
            msg: "Evento creado correctamente",
            data: EventCreated
        })

    }
    catch(err)
    {

        console.log(err);

        res.status(500).json({
            ok: false,
            data: null
        })

    }

}

export const EditEvent : TypedRequest<Event | null, Event , JWTAuthPayload> = async ( req , res ) => {

    try
    {

        const { _id } = req.body

        const eventEdit = await EventModel.findById( _id )

        if( !eventEdit || !req.payload )
        {
            
            return res.status(404).json({
                ok: false,
                data: null,
                msg: "Recurso no encontrado"
            })

        }

        const id_user = req.payload.id

        if( id_user !== eventEdit.user.toString() )
        {

            return res.status(401).json({
                ok: false,
                data: null,
                msg: "Recurso no permitido"
            })

        }

        const updateEvent : Event = {
            ...req.body,
            user: id_user
        }        

        const updatedEvent = await EventModel.findByIdAndUpdate( _id , updateEvent , { new: true })

        return res.status(200).json({
            ok: true,
            data: updatedEvent
        })

    }
    catch(err)
    {
        
        res.status(500).json({
            ok: false,
            data: null
        })

    }

}

export const DeleteEvent : TypedRequest<null, string , any , { id: string }> = async ( req , res ) => {

    try
    {

        const id = req.params.id

        const eventDelete = await EventModel.findById( id )

        if( !eventDelete || !id )
        {
            
            return res.status(401).json({
                ok: false,
                data: null,
            })

        }

        await EventModel.findByIdAndRemove( id )

        return res.status(200).json({
            ok: true,
            data: null,
            msg: "Eliminado correctamente"
        })

    }
    catch(err)
    {
        
        console.log(err)

        res.status(500).json({
            ok: false,
            data: null
        })

    }

}