/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return 'Did you mean to open /graphiql'
})

import GraphqlController from 'App/Controllers/Http/GraphqlController'
import GraphiqlController from 'App/Controllers/Http/GraphiqlController'

Route.get('/graphiql', GraphiqlController.get())
Route.post('/graphql', GraphqlController.post())
// Route.post('/graphql', async () => { return await GraphqlController.post() })