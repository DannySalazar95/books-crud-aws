import FilmsPaginationResponse from '../../models/FilmsPaginationResponse'

export default interface GetFilms {
    execute(): Promise<FilmsPaginationResponse>
}