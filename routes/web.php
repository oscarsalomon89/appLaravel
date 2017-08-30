<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/inicio', 'HomeController@index');

Route::group(['middleware' => ['api']], function () {
    Route::post('/api/register','Auth\AuthController@register');

    Route::post('/api/signin','Auth\AuthController@signin');

    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::get('/api/user','UserController@index');
    });

});

//Auth::routes();
/*Route::post('/login','Auth\LoginController@login');
Route::get('/logout','Auth\LoginController@logOut');*/
Route::get('/clientes', 'HomeController@index');
Route::get('/login','HomeController@index');
Route::get('/signup','HomeController@index');
Route::get('/about','HomeController@index');
Route::get('/pedidos','HomeController@index');
Route::get('/fotos','HomeController@index');

Route::get('/api/users','UserController@getUsers');
Route::get('/api/products','ProductController@getProducts');
Route::post('/api/deleteUser','UserController@deleteUser');
Route::post('/api/updateUser','UserController@updateUser');

Route::post('/api/upload', 'FilesController@upload');
