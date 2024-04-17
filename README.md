# Budgeting App

## Setup

1. Clone the front and back ends
```shell
mkdir budgeting-app cd $_
git clone https://github.com/iris-beckham/express-server-starter
git clone https://github.com/iris-beckham/budgeting-app-frontend.git

```
2. Create an env file for the backend
```shell
cd express-server-starter
touch .env
```
```
//.env
PORT=3003
PG_HOST=localhost
PG_PORT= #number of your postgres port
PG_DATABASE=budget_dev 
PG_USER=postgres
```
3. Make sure that postgres is running
4. Locally deploy the backend 
```shell
npm i 
npm run dev
```
5. Open a new window or tab in the terminal, and cd into the frontend.
6. Create a .env file 
```
//.env
VITE_BASE_API_URL = http://localhost:3003
```
7. Locally deploy the frontend
``` shell 
npm i 
npm run dev
```
8. Go to http://localhost:3000/ (or wherever you opened the port)

## Stretch Goals that were Implemented
- For the edit/create transaction form, all categories and accounts show up as options in the datalist format
- All dates have been converted in to a more easy to read format
