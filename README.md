This is a Hasura test medical application

## Available Scripts

start application with:

### `npm start`

start test with
### `npm test`

Build profuvtion version with

### `npm run build`

###Project details

The project is a medical record based application that creates consulation for patients.

#Receptionist
The receptionist can be allowed to create a consulation. and a particular receptionist can create as many consultations as possible which has been clearly defined in the schema using the Hasura Graphql engine to properly define this.
The consultation details include:
        Patient
        Consultation Date (whenever this record is created)
        Doctor
        Medicines (a simple text field)
        Prescription Date (whenever the doctor adds medicine to this record)
        is_shared (can be a boolean field, details below)


#patients
The patients sees their consultation records on signing into the application using Auth0 and clicking on the options that they are patients.
The see a list, which is a React components that shows if the patients option is clicked which is also the default options.

There is also a view consultation graphql component that does this.

#Doctor
On signing in a doctor sees all consultations assigned to him and he can update these consultations by adding medice to it which fires a lammbda function that changes `is_shared` on the hasura console from `false` which is the default value to `true` and should technically send a mail to the patients

On click of the update consulation button and even is triggered that updates the record in the postgreSQL database using AWS lambda function


