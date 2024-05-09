import axios from "axios";
import GetFilms from "./GetFilms";
import FilmsPaginationResponse from "../../models/FilmsPaginationResponse";
import { GET_FILMS_URL } from "../../config/Film";

export default class GetFilmsAxios implements GetFilms {
    async execute(): Promise<FilmsPaginationResponse> {
        try {
            const response = await axios.get(GET_FILMS_URL);
            const dataResponse = response.data;
    
            return new FilmsPaginationResponse(
                dataResponse.count,
                dataResponse.results,
                dataResponse.next,
                dataResponse.previous
            );
        } catch(exception) {
            return new FilmsPaginationResponse(
                0,
                [],
                null,
                null
            );
        }
    }
}