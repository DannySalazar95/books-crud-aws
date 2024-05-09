import IGetFilm from '../services/film_http/GetFilm'
import AxiosGetFilm from '../services/film_http/GetFilmAxios'
import IMapAtrributes from '../services/film_attributes/MapAttributes'
import SolutionOneMapAttributes from '../services/film_attributes/MapAttributesSolution1'
import FilmAttributeTranslatorSpanish from '../services/film_attributes/FilmAttributeTranslatorSpanish'
import FilmNotFoundException from '../exceptions/FilmNotFoundException'

export const GetFilmController = async (id_film: string) => {

    const getFilmHttpService: IGetFilm = new AxiosGetFilm()
    const mapAttributesService: IMapAtrributes = new SolutionOneMapAttributes()

    const dataResponse = await getFilmHttpService.execute(id_film)
    if (dataResponse == null) {
        throw new FilmNotFoundException("FILM_NOT_FOUND");
    }

    return mapAttributesService.executeTranslatorToFilm(
        dataResponse,
        new FilmAttributeTranslatorSpanish())
}
