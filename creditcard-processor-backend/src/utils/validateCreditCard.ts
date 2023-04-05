import { CreditCardProcessorOutput } from '../types';

export const validateCreditCard = (
  cardNumber: string
): CreditCardProcessorOutput => {
  // Remove spaces and dashes from the card number
  const cleanedCardNumber = cardNumber.replace(/[\s-]/g, '');

  // Use regular expressions to match the card number patterns
  const visaPattern = /^4\d{12}(?:\d{3})?$/;
  const mastercardPattern = /^5[1-5]\d{14}$/;
  const amexPattern = /^3[47]\d{13}$/;
  const discoverPattern = /^6(?:011|5\d{2})\d{12}$/;

  // Check if the card number matches any of the known patterns
  if (visaPattern.test(cleanedCardNumber)) {
    return { isValid: true, type: 'Visa' };
  } else if (mastercardPattern.test(cleanedCardNumber)) {
    return { isValid: true, type: 'Mastercard' };
  } else if (amexPattern.test(cleanedCardNumber)) {
    return { isValid: true, type: 'American Express' };
  } else if (discoverPattern.test(cleanedCardNumber)) {
    return { isValid: true, type: 'Discover' };
  } else {
    return { isValid: false, type: 'Unknown' };
  }
};
