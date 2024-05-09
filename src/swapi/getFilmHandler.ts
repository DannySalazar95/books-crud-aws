import {APIGatewayProxyHandler} from 'aws-lambda'
import {GetFilmController} from './controller/GetFilmController'
import BadRequestException from './exceptions/BadRequestException';
export const handler: APIGatewayProxyHandler = async (event) => {
    try {

        const { pathParameters } = event;
        if (pathParameters == null) { throw new BadRequestException("BAD_REQUEST"); }

        const { id_film } = pathParameters;
        if (typeof id_film == 'undefined') { throw new BadRequestException("BAD_REQUEST"); }

        let body = await GetFilmController(id_film)
        return formatResponse(body)

    } catch (error) {
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


