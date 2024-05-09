import Film from "../../models/Film";
import IFilmAttributeTranslator from "./FilmAttributeTranslator";
import MapAtrributes from "./MapAttributes";

export default class MapAttributesSolution1 implements MapAtrributes {

    executeTranslatorToFilmArr(films: Film[], translator: IFilmAttributeTranslator) {
        return films.map(film => {
            return this.executeTranslatorToFilm(film, translator)
        });
    }

    executeTranslatorToFilm(film: Film, translator: IFilmAttributeTranslator) {
        return {
            [translator.title()]: film.title,
            [translator.episodeId()]: film.episode_id,
            [translator.openingCrawl()]: film.opening_crawl,
            [translator.director()]: film.director,
            [translator.producer()]: film.producer,
            [translator.releaseDate()]: film.release_date,
            [translator.characters()]: film.characters,
            [translator.planets()]: film.planets,
            [translator.starships()]: film.starships,
            [translator.vehicles()]: film.vehicles,
            [translator.species()]: film.species,
            [translator.created()]: film.created,
            [translator.edited()]: film.edited,
            [translator.url()]: film.url,
        };
    }
}