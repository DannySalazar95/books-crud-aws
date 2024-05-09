import {APIGatewayProxyHandler} from 'aws-lambda'
import DBConnection from './services/DBConnection'
import DBConnectionDynamo from './services/DBConnectionDynamo'

export const handler: APIGatewayProxyHandler = async (event) => {

    const { pathParameters } = event;

    if (pathParameters == null) {
        return {
            statusCode: 400,
            body: JSON.stringify({message: 'BAD_REQUEST'})
        };
    }

    const { id_book } = pathParameters;

    if (typeof id_book == 'undefined') {
        return {
            statusCode: 400,
            body: JSON.stringify({message: 'BAD_REQUEST'})
        };
    }

    const dbConnection: DBConnection = new DBConnectionDynamo()
    let book = await dbConnection
        .generateConnection()
        .getBook(id_book)

    return {
        statusCode: 200,
        body: JSON.stringify(book)
    }
}
