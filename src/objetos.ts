//Objetos
//Type Alias

type HeroId = `${string}-${string}-${string}-${string}-${string}`

type HeroPower = 'local' | 'galactic' | 'universal'

type HeroBasicInfo = {
    name:string,
    age: number
}

type HeroProperties = {
    readonly id?: HeroId, //Optional changing
    isActive?: boolean,
    HeroPower?: HeroPower
}

type Hero = HeroBasicInfo & HeroProperties

function createHero(input: HeroBasicInfo): Hero {
    const {name, age} = input
    return {
        id: crypto.randomUUID(), 
        name, 
        age, 
        isActive: true
    }
}

export const thor = createHero({name: 'Thor', age: 2500})