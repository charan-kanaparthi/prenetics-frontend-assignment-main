

### Start the application

- Clone the Application git clone `https://github.com/charan-kanaparthi/prenetics-frontend-assignment-main`
- Install the dependencies `npm install`
- Start the application `npm run dev`

## Prerequisite
As a prerequisite, you should follow the following instructions to set up and run the backend test service for the patient management portal locally

1. Checkout https://github.com/charan-kanaparthi/prenetics-backend-assignment-main 
2. Read README.md and prepare your development environment 
3. `docker-compose up -d --build` – This will build and set up swagger, postgres and service
4. Go to `http://localhost:9080/swagger/` to interact with the APIs

## Functionality
1. Select your Organization from header dropdown
2. Patient Management page for organisation Prenetics will display 8 results per page . Displays the following columns
    * patient name
    * sample barcode
    * activation date
    * result date
    * result value
4.  Search functionality for the Patient Management is implement and can search page by the following
    * patient name
    * sample barcode
    * activation date
    * result date
    * result value
5.Patient Management page for organisation Circle will display 8 results per page . Displays the following  additional columns:
    * result type (RT-PCR, Antigen, Antibody)
    * patient ID
6. For organisation Circle, the Patient Management page can also able to search by patient ID.


