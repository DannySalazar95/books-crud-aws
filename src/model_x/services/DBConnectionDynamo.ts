import {DynamoDBClient} from '@aws-sdk/client-dynamodb'
import {
    DeleteCommand,
    DynamoDBDocumentClient,
    GetCommand,
    PutCommand,
    ScanCommand,
    UpdateCommand
} from '@aws-sdk/lib-dynamodb'
import {BookConfig} from '../config/Book'
import {randomUUID} from 'crypto'
import DBConnection from './DBConnection';
import Book from '../model/Book';

export default class DBConnectionDynamo implements DBConnectionDynamo {

    private ddbDocClient: DynamoDBDocumentClient;

    generateConnection():DBConnection  {
        this.ddbDocClient = DynamoDBDocumentClient.from(new DynamoDBClient({region: BookConfig.AWS_REGION}))
        return this
    }
    async createBook(title: string, author: string): Promise<Book> {
        let bookToCreated = {
            id: randomUUID(),
            title,
            author,
            createdAt: new Date().toISOString()
        }

        await this.ddbDocClient.send(new PutCommand({
            TableName: BookConfig.TABLE,
            Item: bookToCreated
        }))

        return new Book(
            bookToCreated.id,
            bookToCreated.title,
            bookToCreated.author,
            bookToCreated.createdAt)
    }
    async deleteBook(id_book: string) {
        await this.ddbDocClient.send(new DeleteCommand({
            TableName: BookConfig.TABLE,
            Key: { id: id_book }
        }));
    }
    async getBooks(): Promise<Book[]> {
        let response = await this.ddbDocClient.send(
            new ScanCommand({TableName: BookConfig.TABLE}))

        return response.Items.map(element => {
            return new Book(element.id, element.title, element.author, element.createdAt)
        });
    }
    async getBook(id_book: string): Promise<Book> {
        let response = await this.ddbDocClient.send(new GetCommand({
            TableName: BookConfig.TABLE,
            Key: { id: id_book }
        }))

        return new Book(
            response.Item?.id,
            response.Item?.title,
            response.Item?.description,
            response.Item?.createdAt)
    }
    async updateBook(id_book: string, title: string, author: string) {
        await this.ddbDocClient.send(
            new UpdateCommand({
                TableName: BookConfig.TABLE.toString(),
                Key: { id: id_book },
                UpdateExpression: "set title = :title, author = :author",
                ExpressionAttributeValues: {
                    ":title": title,
                    ":author": author
                },
                ReturnValues: 'ALL_NEW'
            }))
    }
}
