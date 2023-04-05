import { Box, Button, Chip, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { validateCreditCard } from '../service';
import { CreditCardProcessorOutput } from '../types';

const CreditCardValidationCard = (): JSX.Element => {
  const [result, setResult] = useState<CreditCardProcessorOutput>();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      cardNumber: '',
    },
  });

  const onSubmit = async (data: Record<string, string>) => {
    const onSuccess = (result: CreditCardProcessorOutput) => {
      setResult(result);
    };
    const onError = (errorMessage: string) => {
      setError('cardNumber', { type: 'custom', message: errorMessage });
    };
    await validateCreditCard(data['cardNumber'], onSuccess, onError);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: '300px',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant='h6'>Credit Card Validation</Typography>
      <Box py={2} width={1}>
        <Controller
          name='cardNumber'
          control={control}
          rules={{ required: 'Please enter a credit card number' }}
          render={({ field }) => (
            <TextField
              error={!!errors.cardNumber}
              id='credit-card-number'
              label='Credit Card Number'
              variant='standard'
              helperText={errors.cardNumber?.message}
              sx={{ width: 1 }}
              {...field}
            />
          )}
        />
      </Box>
      {result && (
        <Box pb={2} width={1}>
          <Box display='flex' alignItems='center'>
            <Typography pr={1} variant='subtitle1'>
              {'Result: '}
            </Typography>
            <Chip
              size='small'
              label={result.isValid ? 'Valid' : 'Invalid'}
              color={result.isValid ? 'success' : 'error'}
            />
          </Box>
          <Typography variant='subtitle1'>{`Card Type: ${result.type}`}</Typography>
        </Box>
      )}
      <Button
        variant='outlined'
        color='info'
        sx={{ width: 1 }}
        onClick={handleSubmit(onSubmit)}
      >
        Validate
      </Button>
    </Paper>
  );
};

export { CreditCardValidationCard };
