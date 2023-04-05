# Credit Card Processor Backend

Deployed api endpoints are:

```curl
https://t1z5hp0kid.execute-api.us-east-1.amazonaws.com/ (healthCheck)
https://t1z5hp0kid.execute-api.us-east-1.amazonaws.com/api/processCreditCard (validateCreditCard)
```

## Usage

**Deploy**

```
$ serverless deploy
```

**Invoke the function locally.**

```
serverless invoke local --function healthCheck
```
