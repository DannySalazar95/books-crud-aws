import middy from '@middy/core'
import jsonBodyParser from '@middy/http-json-body-parser';
import httpErrorHandler from '@middy/http-error-handler'
import validator from '@middy/validator'
import { transpileSchema } from '@middy/validator/transpile'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import DBConnection from './services/DBConnection'
import DBConnectionDynamo from './services/DBConnectionDynamo'

const schema = {
    type: 'object',
    properties: {
        body: {
            type: 'object',
            properties: {
                title: {
                    type: 'string',
                    minLength: 1,
                    maxLength: 100
                },
                author: {
                    type: 'string',
                    minLength: 1,
                    maxLength: 200,
                }
            },
            required: ['title', 'author']
        }
    }
}

export const handler = middy<APIGatewayProxyEvent, APIGatewayProxyResult>()
  .use(jsonBodyParser())
  .use(validator({ eventSchema: transpileSchema(schema) }))
  .use(httpErrorHandler())
  .handler(async (event) => {

    if (event.body == null) {
        return {
            statusCode: 422,
            body: JSON.stringify({message: 'UNPROCESSABLE_ENTITY'})
        };
    }

    // @ts-ignore
    const { title, author } = event.body

    const dbConnection: DBConnection = new DBConnectionDynamo()
    let bookCreated = await dbConnection
        .generateConnection()
        .createBook(title, author)

    return {
        statusCode: 201,
        body: JSON.stringify(bookCreated)
    }

})
