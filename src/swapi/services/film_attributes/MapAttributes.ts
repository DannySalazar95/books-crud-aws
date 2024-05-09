import Film from "../../models/Film";
import IFilmAttributeTranslator from "./FilmAttributeTranslator";

export default interface IMapAtrributes {
    executeTranslatorToFilmArr(films: Film[], translator: IFilmAttributeTranslator): any[]
    executeTranslatorToFilm(film: Film, translator: IFilmAttributeTranslator): any
}