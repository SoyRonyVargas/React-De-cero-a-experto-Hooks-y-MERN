import useCalendarStore from '../hooks/useCalendarStore'
import { FabDeleteButtonWrapper } from '../styled'
import { FaTrash } from 'react-icons/fa'
// import useUI from '../hooks/useUI'
import { Fragment } from 'react'

const FabDeleteButton = () => {

    const { handleDeleteEvent , hasSelectedEvent } = useCalendarStore()

    // const { handleShowModal } = useUI()

    const handleDelete = () => {

        handleDeleteEvent()

    }

    return (
        <Fragment>
            {
                hasSelectedEvent
                &&
                <FabDeleteButtonWrapper>
                    <button onClick={handleDelete} className="button is-large is-danger">
                        <span className="icon">
                            <FaTrash />
                        </span>
                    </button>
                </FabDeleteButtonWrapper>
            }
        </Fragment>
    )
}

export default FabDeleteButton