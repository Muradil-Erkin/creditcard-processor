import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { CreditCardProcessorInput } from './types';
import { validateCreditCard } from './utils';

export const healthCheck = async (
  _event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    statusCode: 200,
    body: JSON.stringify({
      message: 'Healthy',
    }),
  };
};

export const processCreditCard = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.body) {
      throw new Error('Invalid Input');
    }

    const { cardNumber } = JSON.parse(event.body) as CreditCardProcessorInput;

    if (!cardNumber) {
      throw new Error('Invalid Input');
    }

    return {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      statusCode: 200,
      body: JSON.stringify(validateCreditCard(cardNumber)),
    };
  } catch (error) {
    return {
      headers: {
        'content-type': 'application/json',
      },
      statusCode: 400,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};
