import GetFilms from '../services/film_http/GetFilms'
import GetFilmsAxios from '../services/film_http/GetFilmsAxios'
import MapAtrributes from '../services/film_attributes/MapAttributes'
import MapAttributesSolution1 from '../services/film_attributes/MapAttributesSolution1'
import SpanishFilmAttributeTranslator from '../services/film_attributes/FilmAttributeTranslatorSpanish'

export const GetFilmsController = async () => {
    const getFilmsHttpService: GetFilms = new GetFilmsAxios()
    const mapAttributesService: MapAtrributes = new MapAttributesSolution1()

    const dataResponse = await getFilmsHttpService.execute()
    const filmsWithAttributesTranslated = mapAttributesService.executeTranslatorToFilmArr(
        dataResponse.getResults(),
        new SpanishFilmAttributeTranslator())
    
    return {
        ...dataResponse,
        results: filmsWithAttributesTranslated
    };
}