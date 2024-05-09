import {describe, expect, test, jest, beforeEach} from '@jest/globals';
import DBConnectionDynamo from "../services/DBConnectionDynamo";
import { mockClient } from "aws-sdk-client-mock";
import {DynamoDBDocumentClient, GetCommand, PutCommand} from "@aws-sdk/lib-dynamodb";

jest.mock('axios');

const ddbMock = mockClient(DynamoDBDocumentClient);
beforeEach(() => {
    ddbMock.reset();
});

describe('db connection dynamo module', () => {

    test('create book', async () => {
        let title = 'Hello world';
        let author = 'dynamodb aws nodejs';

        ddbMock.on(PutCommand).resolves({});

        const data = await (new DBConnectionDynamo())
            .generateConnection()
            .createBook(title, author);

        expect(data).toHaveProperty('createdAt');
        expect(data).toHaveProperty('id');
        expect(data.title).toBe(title);
        expect(data.author).toBe(author);
    });

    test('get book', async () => {
        let id_book = '47fjfk38dddf44';
        let title = 'Hello world';
        let author = 'dynamodb aws nodejs';

        ddbMock.on(GetCommand).resolves({
            Item: { id: id_book, title, author, createAt: ''},
        });

        const data = await (new DBConnectionDynamo())
            .generateConnection()
            .getBook(id_book);

        expect(data).toHaveProperty('createdAt');
        expect(data).toHaveProperty('id');
        expect(data.id).toBe(id_book);
    });
});
