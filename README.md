

### Start the application

- Clone the Application git clone ``
- Install the dependencies `npm install`
- Start the application `npm run dev`

## Prerequisite
As a prerequisite, you should follow the following instructions to set up and run the backend test service for the patient management portal locally

1. Checkout https://github.com/charan-kanaparthi/prenetics-backend-assignment
2. Read README.md and prepare your development environment 
3. `docker-compose up -d --build` – This will build and set up swagger, postgres and service
4. Go to `http://localhost:9080/swagger/` to interact with the APIs – the GET endpoint you would need to interact is “Get results of organisation”. *This endpoint currently only returns mock data*. This is the main endpoint for this challenge and this challegne would require you to engineer your solution against the specification.

