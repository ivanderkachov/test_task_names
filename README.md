## Quick start

1. Clone this repo using:

  ```shell
  $ git clone git@github.com:ivanderkachov/test_task_names.git
  ```

2. To install dependencies on client side - cd into 'client' and run:

  ```shell
  $ npm install
  ```

3. To install dependencies on server side - cd into 'server' folder and run:

  ```shell
  $ npm install
  ```

4. Then setup the connection with PostgreSQL database - run (in 'server' folder):

  ```shell
  $ docker compose up
  ```


5. Then when connection with database will be created run next command to start the application:
   - in 'server' folder:

  ```shell
  $ npm run start
  ```
  or

  ```shell
  $ npm run start:dev
  ```

   - in 'client' folder:

   ```shell
  $ npm run start
  ```

6. Open browser on localhost:3000 and test the application


## Features

* React, Redux
* Node, NestJS
* PostgreSQL DB, Sequelize, Docker
* Authotization using guards, JWT, bcryptjs
* Validations on Client (Formik, Yup) and Server (Validation pipes)

## Video walkthrough
https://drive.google.com/file/d/1dR6DyN58CUYoCLi4VCrtUOtWNOkJQbrN/view?usp=sharing