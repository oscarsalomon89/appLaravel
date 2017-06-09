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

Route::get('/inicio', 'HomeController@index')->name('clientes');

//Auth::routes();
Route::post('/login','LoginController@login');
Route::get('/logout','LoginController@logOut');
Route::get('/clientes', 'HomeController@index')->name('clientes');

Route::get('/login','HomeController@index');
Route::get('/about','HomeController@index');
Route::get('/api/users','UserController@getUsers');
