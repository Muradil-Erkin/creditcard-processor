# Credit Card Processor

See the deployed app [here](https://dev.d2v67hwgwcl0xf.amplifyapp.com/)

## Tech Stack

**Back End**

- Tools: Serverless framework + typescript
- Infrastructure: AWS API Gateway -> AWS Lambda

**Front End**

- Tools: React + typescript
- Infrastructure: AWS Amplify Static Web Hosting

## Assumptions

- All validation happens in backend instead of on both back and front end. Generally we include necessary validations on the front end to reduce unnecessary network requests.
- No authentication needed, but AWS Cognito would be utilizsed otherwise
- Not all card types included. Available card types are: Visa, Mastercard, American Express, Discover
- No CI/CD pipeline
- Tools like ESLint, prettier etc are not included in the codebase, but are things that we always include in actual projects
