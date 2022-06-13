import { Navigate, useParams , useNavigate } from "react-router-dom"
import getHeroById from "../../selectors/getHeroById"
import { Hero } from "../../interfaces"
import { useMemo } from "react"

const HeroScreen = () => {

  const navigate = useNavigate()
  const params = useParams()

  const hero: Hero | undefined = useMemo( () => getHeroById(params.id) , [params.id])

  console.log(hero);

  if (!hero) {
    return <Navigate to={'/'} replace={true} />
  }

  const { id , superhero , alter_ego , publisher , first_appearance , characters } = hero

  const src : string = `/heroes/${id}.jpg`

  const handleReturn = () => navigate(-1);

  return (
    <main className="row g-2">
      <section className="col-sm-6 col-md-4 animate__animated  animate__fadeIn">
      
        <img src={src} className="img-fluid" alt="..." />
      
      </section>
      
      <section className="col-6 col-md-8">
        
        <h3> { superhero } </h3>

        <hr />

        <ul className="list-group list-group-flush mx-0">
          <li className="list-group-item px-0">
            <b>Alter Ego: </b> { alter_ego }
          </li>
          <li className="list-group-item px-0">
            <b>Publisher: </b> { publisher }
          </li>
          <li className="list-group-item px-0">
            <b>First Appearance: </b> { first_appearance }
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>

        <p>
          { characters }
        </p>

        <button onClick={handleReturn} className="btn btn-primary btn-sm">
            Regresar
        </button>

      </section>

    </main>

  )
}

export default HeroScreen