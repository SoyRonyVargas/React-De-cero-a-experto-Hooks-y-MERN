import { MiddlewareTokenValidator } from './../../middlewares/middlewareTokenValidator';
import { CreateEventValidator, EditEventValidator } from '../validators'
import { MiddlewareValidator  } from './../../middlewares/index';
import { Router } from 'express'
import { 
    GetAllEvents,
    CreateEvent,
    DeleteEvent,
    EditEvent,
} from '../controllers'

const EventRouter = Router()

EventRouter.use(MiddlewareTokenValidator)

EventRouter.get(
    "/" , 
    GetAllEvents 
)

EventRouter.post( 
    "/" , 
    CreateEventValidator, 
    MiddlewareValidator, 
    CreateEvent 
)

EventRouter.put( 
    "/" , 
    EditEventValidator, 
    MiddlewareValidator, 
    EditEvent
)

EventRouter.delete( 
    "/:id" , 
    // EditEventValidator, 
    MiddlewareValidator, 
    DeleteEvent
)

export default EventRouter