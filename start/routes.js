'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/','PageController.index')
Route.get('/admin/plans', 'Admin/ProductController.index')
Route.get('/admin/plans', 'Admin/ProductController.store')
Route.get('/admin/plans/create', 'Admin/ProductController.create')
Route.get('/admin/plans/:id', 'Admin/ProductController.show')
Route.get('/admin/plans/:id/edit', 'Admin/ProductController.edit')
Route.get('/admin/plans/:id/edit', 'Admin/ProductController.update')
Route.get('/admin/plans/:id/edit', 'Admin/ProductController.delete')
