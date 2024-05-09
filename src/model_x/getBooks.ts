import {APIGatewayProxyHandler} from 'aws-lambda'
import DBConnection from './services/DBConnection'
import DBConnectionDynamo from './services/DBConnectionDynamo'

export const handler: APIGatewayProxyHandler = async (event) => {

    const dbConnection: DBConnection = new DBConnectionDynamo()
    let response = await dbConnection
        .generateConnection()
        .getBooks()

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}
