import {describe, expect, test, jest} from '@jest/globals';
import axios from 'axios';
import GetFilmAxios from "../services/film_http/GetFilmAxios";
import GetFilmsAxios from "../services/film_http/GetFilmsAxios";
import Film from '../models/Film'
import FilmsPaginationResponse from '../models/FilmsPaginationResponse';

jest.mock('axios');

describe('films module', () => {

    test('get films success', async () => {
        let itemsInResult = [
            {
                title: 'a',
                episode_id: 1,
                opening_crawl: 'b',
                director: 'c',
                producer: 'd',
                release_date: 'e',
                characters: [],
                planets: [],
                starships: [],
                vehicles: [],
                species: [],
                created: 'f',
                edited: 'g',
                url: 'h',
            }
        ];

        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
            data: {
                count: 1,
                next: null,
                previous: null,
                results: itemsInResult
            },
        });
        const data = await (new GetFilmsAxios())
            .execute();
        return expect(data).toEqual((new FilmsPaginationResponse(
            1,
            itemsInResult,
            null,
            null
        )));
    });

    test('get films fails', async () => {
        (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(
            new Error('Request fail')
        );
        const data = await (new GetFilmsAxios())
            .execute();
        return expect(data).toEqual((new FilmsPaginationResponse(0, [], null, null)));
    });

    test('get film with id 10000000 is null', async () => {

        (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(
            new Error('Request not found')
        );
        const data = await (new GetFilmAxios())
            .execute("10000000");
        return expect(data).toEqual(null);
    });

    test('get film with id 1 is not null', async () => {

        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
            data: {
                title: 'a',
                episode_id: 1,
                opening_crawl: 'b',
                director: 'c',
                producer: 'd',
                release_date: 'e',
                characters: [],
                planets: [],
                starships: [],
                vehicles: [],
                species: [],
                created: 'f',
                edited: 'g',
                url: 'h',
            },
        });
        const data = await (new GetFilmAxios())
            .execute("1");
        return expect(data).toEqual((new Film('a', 1, 'b', 'c', 'd', 'e', [], [], [], [], [], 'f', 'g', 'h')));
    });
});
