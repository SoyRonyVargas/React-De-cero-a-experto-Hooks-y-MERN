import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'
import React from 'react'

const MultipleHooks = () => {

    const {
        counter,
        increment
    } = useCounter(1)

    const {
        data,
        loading
    } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { author , quote } = !!data && data[0]

    return (
        <div className="">
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                !loading ?
                <figure className="card p-3">
                <blockquote className="blockquote">
                    <p> {quote} </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    { author }
                </figcaption>
                </figure>
                :
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            }
            <button onClick={increment} className="btn btn-primary">
                Next Quote
            </button>
        </div>
    )
}

export default MultipleHooks
