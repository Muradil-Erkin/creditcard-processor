import { DEV_API_BASE_URL, Endpoints } from '../constants';
import { CreditCardProcessorOutput } from '../types';

const validateCreditCard = async (
  data: string,
  onSuccess: (result: CreditCardProcessorOutput) => void,
  onError: (errorMessage: string) => void
) => {
  try {
    const response = await fetch(
      `${DEV_API_BASE_URL}${Endpoints.ProcessCreditCard}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardNumber: data,
        }),
      }
    );

    const result = await response.json();

    if (response.status === 400) {
      onError(result.message);
    }

    onSuccess(result as CreditCardProcessorOutput);
  } catch (error: any) {
    onError(error.body.message);
  }
};

export { validateCreditCard };
