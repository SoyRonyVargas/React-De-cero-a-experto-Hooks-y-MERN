import { heroes } from "../data/heroes"
import { Hero } from "../interfaces"

const getHeroesByName = ( name : string  ) : Hero[] => {

    name = name.toLocaleLowerCase().trim()

    if( name.length === 0 ) return []

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    )

}

export default getHeroesByName