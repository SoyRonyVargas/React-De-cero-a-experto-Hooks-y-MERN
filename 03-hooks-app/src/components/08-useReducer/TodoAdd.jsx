import React from 'react'

const TodoAdd = ({ handleSubmit , ref }) => {
    return (
        <div className='col'>
            <h3>
                Agregar Todo
            </h3>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                        ref={ref}
                    />
                </div>

                <button type='submit' className='btn btn-primary btn-small btn-sm'>
                    Agregar
                </button>
            </form>
        </div>
    )
}

export default TodoAdd