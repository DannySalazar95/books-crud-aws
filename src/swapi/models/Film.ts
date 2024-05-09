export default class Film {
    title: string
    episode_id: number
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    characters: string[]
    planets: string[]
    starships: string[]
    vehicles: string[]
    species: string[]
    created: string
    edited: string
    url: string

    constructor(
        title: string,
        episode_id: number,
        opening_crawl: string,
        director: string,
        producer: string,
        release_date: string,
        characters: string[],
        planets: string[],
        starships: string[],
        vehicles: string[],
        species: string[],
        created: string,
        edited: string,
        url: string
    ) {
        this.title = title
        this.episode_id = episode_id
        this.opening_crawl = opening_crawl
        this.director = director
        this.producer = producer
        this.release_date = release_date
        this.characters = characters
        this.planets = planets
        this.starships = starships
        this.vehicles = vehicles
        this.species = species
        this.created = created
        this.edited = edited
        this.url = url
    }
}