import getHeroesByName from '../../selectors/getHeroesByName'
import { useNavigate , useLocation } from 'react-router-dom'
import { useForm } from "../../hooks/useForm"
import HeroCard from '../Hero/HeroCard'
import queryString from 'query-string'

const SearchScreen = () => {
  
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const heroes = getHeroesByName(String(q))

  const { formState , onInputChange } = useForm({
    search: q
  })

  const onSubmit = ( event : any ) => {

    event.preventDefault()

    navigate(`?q=${formState.search}`)

  }
  
  return (
    <div className="row">
      <div className="col-5">
        <h1>Search</h1>
        <hr />
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input 
              type="text" 
              name="search"
              autoComplete="off"
              className="form-control" 
              placeholder="Search a hero..."
              value={formState.search}
              onChange={onInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
      <div className="col-7">
        <h1>Results</h1>
        <hr />
        
        {
          heroes.length > 0 &&
          <div className="alert alert-primary" role="alert">
          Results for <b> { q } </b>
          </div>
        }
        
        {
          (heroes.length === 0 && q) &&
          <div className="alert alert-danger" role="alert">
            No results for <b> { q } </b>
          </div>
        }

        <section className=''>
          {  
            heroes.map( hero => 
              <HeroCard key={hero.id} auto={true} {...hero} />
            )
          }
        </section>          
      </div>
    </div>
  )
}

export default SearchScreen