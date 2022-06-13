import { Link } from 'react-router-dom'
import { Hero } from '../../interfaces'
import { FC } from 'react'

const HeroCard: FC<Hero> = (props) => {

    const {
        id,
        superhero,
        characters,
        publisher,
        auto
    } = props

    return (
        <div className="card mb-3" style={{ maxWidth: auto ? '100%' : 540 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        className="img-fluid rounded-start"
                        src={`/heroes/${id}.jpg`} 
                        alt={superhero} 
                        title={superhero} 
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> { superhero } </h5>
                        <p className="card-text mb-1"> { characters } </p>
                        <p className="card-text">
                            <small className="text-muted"> { publisher } </small>
                        </p>
                        <Link to={`/hero/${id}`} className="btn btn-primary btn-sm">Ver Más</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroCard