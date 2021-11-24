'use strict'

const BukuController = require('../app/Controllers/Http/BukuController');

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

// Route.on('/').render('welcome')
Route.get('/', 'BukuController.index');
Route.get('/daftar-buku','BukuController.daftarBuku');
Route.get('/input-buku','BukuController.inputBuku');
Route.get('/edit/:id','BukuController.editBuku');

Route.get('/delete/:id', 'BukuController.delete');

Route.post('/store', 'BukuController.store');
Route.post('/update/:id','BukuController.update');


// Route.get('/',()=>{
//     return 'hello world';
// }) versi panjangnya
// Route.get('/',()=>'hello world 2') // versi pendeknya
// Route.put('/',()=>'ini adalah put')
// Route.post('/',()=>'ini adalah post')
// Route.delete('/',()=>'ini adalah delete')
// Route.patch('/',()=>'ini adalah patch')

//multiple mathode

// Route.route('/',()=>'ini adalah multiple method', ['GET','POST','PUT'])

//route menggunakan parameter
Route.get('posts/:id',({params})=>{
    return `post id ${params.id}`;
})

//route dengan parameter optional
Route.get('posts/:id?',({params})=>{
    return `post id ${params.id}`;
})

//routing name
Route.get('/testing',()=>'hello dunia').as ('get.hellow');

Route.get('/adonis','BelajarAdoniController.index');
Route.post('/adonis/create', 'BelajarAdoniController.create');
Route.put('/adonis/update','BelajarAdoniController.update');
