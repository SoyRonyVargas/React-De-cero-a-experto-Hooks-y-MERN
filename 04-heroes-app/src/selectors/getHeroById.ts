import { heroes } from "../data/heroes"

const getHeroById = ( id : string | undefined ) => {
    
    return heroes.find( hero => hero.id === id ) 

}

export default getHeroById