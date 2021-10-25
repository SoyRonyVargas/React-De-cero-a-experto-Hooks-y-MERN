// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
// import heroes from '../data/heroes';
import { all_hero } from '../heroes'

// console.log( owners );

export const getHeroeById = id => all_hero.find(heroe => heroe.id === id)

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = owner =>
	all_hero.filter(heroe => heroe.owner === owner)

// console.log( getHeroesByOwner('Marvel') );
