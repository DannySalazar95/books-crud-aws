import axios from "axios";
import GetFilm from "./GetFilm";
import Film from "../../models/Film";
import { GET_FILM_URL } from "../../config/Film";

export default class GetFilmAxios implements GetFilm {
    async execute(id: string): Promise<Film|null> {
        try {
            const response = await axios.get(GET_FILM_URL(id));
            const dataResponse = response.data;

            return new Film(
                dataResponse.title,
                dataResponse.episode_id,
                dataResponse.opening_crawl,
                dataResponse.director,
                dataResponse.producer,
                dataResponse.release_date,
                dataResponse.characters,
                dataResponse.planets,
                dataResponse.starships,
                dataResponse.vehicles,
                dataResponse.species,
                dataResponse.created,
                dataResponse.edited,
                dataResponse.url
            );
        } catch(exception) {
            return null
        }
    }
}