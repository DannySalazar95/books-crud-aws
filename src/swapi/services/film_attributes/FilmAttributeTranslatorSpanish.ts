import FilmAttributeTranslator from "./FilmAttributeTranslator"

export default class FilmAttributeTranslatorSpanish implements FilmAttributeTranslator {
    title(): string {
        return "titulo"
    }
    episodeId(): string {
        return "episodio_id"
    }
    openingCrawl(): string {
        return "apertura_rastreo"
    }
    director(): string {
        return "director"
    }
    producer(): string {
        return "productor"
    }
    releaseDate(): string {
        return "fecha_lanzamiento"
    }
    characters(): string {
        return "caracteres"
    }
    planets(): string {
        return "planetas"
    }
    starships(): string {
        return "naves_estelares"
    }
    vehicles(): string {
        return "vehiculos"
    }
    species(): string {
        return "especies"
    }
    created(): string {
        return "creado"
    }
    edited(): string {
        return "editado"
    }
    url(): string {
        return "url"
    }
}