import {APIGatewayProxyHandler} from 'aws-lambda'
import {GetFilmsController} from './controller/GetFilmsController'


export const handler: APIGatewayProxyHandler = async (event) => {
    try {
        return formatResponse(await GetFilmsController())
    } catch (error) {
        console.error('Error en la solicitud:', error.message);
        return formatErrorResponse(error)
    }
}

var formatResponse = function(body){
    return {
      "statusCode": 200,
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(body)
    }
  }
  
  var formatErrorResponse = function(error){
    return {
      "statusCode": error.code,
      "headers": {
        "Content-Type": "application/json",
      },
      "body": JSON.stringify({
        "status": error.code,
        "message": error.message
      })
    }
  }


