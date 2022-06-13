import { heroes } from "../data/heroes"
import { Hero } from "../interfaces"

const getHeroByPublisher = ( publisher : string ) : Hero[] => {
    
    const validPublishers: string[] = ['DC Comics' , 'Marvel Comics']

    if( !validPublishers.includes(publisher) ){
        throw new Error(`${publisher} no es valido`)
    }

    return heroes.filter( hero => hero.publisher === publisher )

}

export default getHeroByPublisher