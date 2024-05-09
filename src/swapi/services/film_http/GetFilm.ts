import Film from '../../models/Film'

export default interface GetFilm {
    execute(id: string): Promise<Film|null>
}