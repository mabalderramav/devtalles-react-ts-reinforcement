import type {Hero} from '../data/heroes.data';
import {heroes} from '../data/heroes.data';
import {Owner} from "../data/owner.ts";

const getHeroById = (id: number): Hero | undefined =>
    heroes.find(hero => hero.id === id);
const getHeroesByName = (name: string): Hero[] =>
    heroes.filter(hero => hero.name.toLowerCase().includes(name.toLowerCase()));

// Homework
const getHeroesByOwner = (owner: Owner): Hero[] =>
    heroes.filter(hero => hero.owner === owner);

console.log(getHeroesByName('Batman'));
console.log(getHeroById(1));

export { getHeroesByName, getHeroById, getHeroesByOwner };